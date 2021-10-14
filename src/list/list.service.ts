import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { List } from 'src/schema/list.model';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListModule } from './list.module';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(List.name) private readonly listModel: Model<List>,
  ) {}

  findAll() {
    console.log(process.env.MONGO_URI);
    return this.listModel.find().exec();
  }

  findAllTemplates() {
    return this.listModel.find({ template: true }).exec();
  }

  findAllInstances() {
    return this.listModel.find({ template: false }).exec();
  }

  async findOne(_id: string) {
    const list = await this.listModel.findOne({ _id }).exec();
    if (!list) {
      throw new NotFoundException('List not found');
    }
    return list;
  }

  async download(_id: string) {
    const list = await this.findOne(_id);
    this.update(_id, { downloads: list.downloads + 1 });
  }

  create(createList: CreateListDto) {
    console.log('creating new list');
    const list = new this.listModel(createList);
    list.downloads = 0;
    return list.save();
  }

  async update(_id: string, updateList: UpdateListDto) {
    const list = await this.listModel
      .findOneAndUpdate({ _id }, { $set: updateList }, { new: true })
      .exec();
    if (!list) {
      throw new NotFoundException('List not found');
    }
    return list;
  }

  async remove(id: string) {
    const list = await this.findOne(id);
    return list.remove();
  }

  removeAll() {
    return this.listModel.deleteMany({}).exec();
  }

  async instantiate(id: string) {
    const list: List = await this.findOne(id);
    console.log(list);
    const myList: List = new this.listModel({
      name: list.name,
      color: list.color,
      icon: list.icon,
      template: false,
      todos: list.todos,
    });
    await myList.save();
    console.log(myList.id);
    return myList.id;
  }
}
