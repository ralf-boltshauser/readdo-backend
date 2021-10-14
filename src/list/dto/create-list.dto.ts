import { Todo } from 'src/todo/todo.model';

export class CreateListDto {
  _id: string;
  readonly name: string;
  readonly color: number;
  readonly icon: number;
  readonly iconFamily: string;
  readonly iconFontPackage: string;
  readonly template: boolean;
  readonly todos: Todo[];
}
