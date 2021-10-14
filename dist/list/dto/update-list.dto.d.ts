import { Todo } from 'src/todo/todo.model';
export declare class UpdateListDto {
    readonly name?: string;
    readonly category?: string;
    readonly icon?: string;
    readonly template?: boolean;
    downloads?: number;
    readonly todos?: Todo[];
}
