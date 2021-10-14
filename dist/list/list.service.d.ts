import { Model } from 'mongoose';
import { List } from 'src/schema/list.model';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
export declare class ListService {
    private readonly listModel;
    constructor(listModel: Model<List>);
    findAll(): Promise<(List & {
        _id: any;
    })[]>;
    findAllTemplates(): Promise<(List & {
        _id: any;
    })[]>;
    findAllInstances(): Promise<(List & {
        _id: any;
    })[]>;
    findOne(_id: string): Promise<List & {
        _id: any;
    }>;
    download(_id: string): Promise<void>;
    create(createList: CreateListDto): Promise<List & {
        _id: any;
    }>;
    update(_id: string, updateList: UpdateListDto): Promise<List & {
        _id: any;
    }>;
    remove(id: string): Promise<List & {
        _id: any;
    }>;
    removeAll(): Promise<import("mongodb").DeleteResult>;
    instantiate(id: string): Promise<any>;
}
