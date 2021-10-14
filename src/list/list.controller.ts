import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { List } from '../schema/list.model';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListService } from './list.service';

@Controller('lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Post()
  create(@Body() createListDto: CreateListDto) {
    delete createListDto._id;
    console.log(createListDto);
    const generatedId = this.listService.create(createListDto);
    return { ...createListDto, id: generatedId };
  }

  @Get()
  findAll() {
    return this.listService.findAll();
  }

  @Get('/templates')
  findAllTemplates() {
    return this.listService.findAllTemplates();
  }
  @Get('/instances')
  findAllInstances() {
    return this.listService.findAllInstances();
  }

  @Get('/:_id')
  findOne(@Param() id: string) {
    return this.listService.findOne(id);
  }

  @Patch('/download/:_id')
  download(@Param() _id: string, @Body() updateListDto: UpdateListDto) {
    this.listService.download(_id);
    return true;
  }

  @Patch('/:_id')
  update(@Param() _id: string, @Body() updateListDto: UpdateListDto) {
    this.listService.update(_id, updateListDto);
    console.log(updateListDto, _id);
    return { ...updateListDto, id: _id };
  }

  @Delete('/:_id')
  remove(@Param() id: string) {
    console.log(id);
    this.listService.remove(id);
    return { id };
  }

  @Delete()
  removeAll() {
    this.listService.removeAll();
    return;
  }

  @Post('/instantiate')
  instantiate(@Body() id: string) {
    return this.listService.instantiate(id);
  }
}
