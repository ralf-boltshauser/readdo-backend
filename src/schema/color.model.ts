import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, ObjectId } from 'mongoose';
import { Todo } from 'src/todo/todo.model';

@Schema()
export class Color extends Document {
  @Prop()
  public name: string;

  @Prop()
  public value: string;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
