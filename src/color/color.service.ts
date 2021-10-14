import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color } from 'src/schema/color.model';

@Injectable()
export class ColorService {
  constructor(
    @InjectModel(Color.name) private readonly colorModel: Model<Color>,
  ) {}
  findAll() {
    return this.colorModel.find().exec();
  }
}
