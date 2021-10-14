import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, ObjectId } from 'mongoose';
import { Todo } from 'src/todo/todo.model';

@Schema()
export class List extends Document {
  @Prop()
  public name: string;

  @Prop()
  public template: boolean;

  @Prop()
  public icon: number;

  @Prop()
  public iconFamily: string;

  @Prop()
  public iconFontPackage: string;

  @Prop()
  public downloads: number;

  @Prop()
  public color: number;

  @Prop([Todo])
  public todos: Todo[];
}

export const ListSchema = SchemaFactory.createForClass(List);
