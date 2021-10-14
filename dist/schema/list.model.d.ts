import { Document } from 'mongoose';
import { Todo } from 'src/todo/todo.model';
export declare class List extends Document {
    name: string;
    template: boolean;
    icon: number;
    iconFamily: string;
    iconFontPackage: string;
    downloads: number;
    color: number;
    todos: Todo[];
}
export declare const ListSchema: import("mongoose").Schema<List, import("mongoose").Model<List, any, any, any>, {}>;
