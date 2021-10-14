import { List } from '../schema/list.model';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListService } from './list.service';
export declare class ListController {
    private listService;
    constructor(listService: ListService);
    create(createListDto: CreateListDto): {
        id: Promise<List & {
            _id: any;
        }>;
        _id: string;
        name: string;
        color: number;
        icon: number;
        iconFamily: string;
        iconFontPackage: string;
        template: boolean;
        todos: import("../todo/todo.model").Todo[];
    };
    findAll(): Promise<(List & {
        _id: any;
    })[]>;
    findAllTemplates(): Promise<(List & {
        _id: any;
    })[]>;
    findAllInstances(): Promise<(List & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<List & {
        _id: any;
    }>;
    download(_id: string, updateListDto: UpdateListDto): boolean;
    update(_id: string, updateListDto: UpdateListDto): {
        id: string;
        name?: string;
        category?: string;
        icon?: string;
        template?: boolean;
        downloads?: number;
        todos?: import("../todo/todo.model").Todo[];
    };
    remove(id: string): {
        id: string;
    };
    removeAll(): void;
    instantiate(id: string): Promise<any>;
}
