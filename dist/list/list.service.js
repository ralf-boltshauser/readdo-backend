"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const list_model_1 = require("../schema/list.model");
let ListService = class ListService {
    constructor(listModel) {
        this.listModel = listModel;
    }
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
    async findOne(_id) {
        const list = await this.listModel.findOne({ _id }).exec();
        if (!list) {
            throw new common_1.NotFoundException('List not found');
        }
        return list;
    }
    async download(_id) {
        const list = await this.findOne(_id);
        this.update(_id, { downloads: list.downloads + 1 });
    }
    create(createList) {
        console.log('creating new list');
        const list = new this.listModel(createList);
        list.downloads = 0;
        return list.save();
    }
    async update(_id, updateList) {
        const list = await this.listModel
            .findOneAndUpdate({ _id }, { $set: updateList }, { new: true })
            .exec();
        if (!list) {
            throw new common_1.NotFoundException('List not found');
        }
        return list;
    }
    async remove(id) {
        const list = await this.findOne(id);
        return list.remove();
    }
    removeAll() {
        return this.listModel.deleteMany({}).exec();
    }
    async instantiate(id) {
        const list = await this.findOne(id);
        console.log(list);
        const myList = new this.listModel({
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
};
ListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(list_model_1.List.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ListService);
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map