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
exports.ListController = void 0;
const common_1 = require("@nestjs/common");
const create_list_dto_1 = require("./dto/create-list.dto");
const update_list_dto_1 = require("./dto/update-list.dto");
const list_service_1 = require("./list.service");
let ListController = class ListController {
    constructor(listService) {
        this.listService = listService;
    }
    create(createListDto) {
        delete createListDto._id;
        console.log(createListDto);
        const generatedId = this.listService.create(createListDto);
        return Object.assign(Object.assign({}, createListDto), { id: generatedId });
    }
    findAll() {
        return this.listService.findAll();
    }
    findAllTemplates() {
        return this.listService.findAllTemplates();
    }
    findAllInstances() {
        return this.listService.findAllInstances();
    }
    findOne(id) {
        return this.listService.findOne(id);
    }
    download(_id, updateListDto) {
        this.listService.download(_id);
        return true;
    }
    update(_id, updateListDto) {
        this.listService.update(_id, updateListDto);
        console.log(updateListDto, _id);
        return Object.assign(Object.assign({}, updateListDto), { id: _id });
    }
    remove(id) {
        console.log(id);
        this.listService.remove(id);
        return { id };
    }
    removeAll() {
        this.listService.removeAll();
        return;
    }
    instantiate(id) {
        return this.listService.instantiate(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_dto_1.CreateListDto]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/templates'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListController.prototype, "findAllTemplates", null);
__decorate([
    (0, common_1.Get)('/instances'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListController.prototype, "findAllInstances", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/download/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_list_dto_1.UpdateListDto]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "download", null);
__decorate([
    (0, common_1.Patch)('/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_list_dto_1.UpdateListDto]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListController.prototype, "removeAll", null);
__decorate([
    (0, common_1.Post)('/instantiate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "instantiate", null);
ListController = __decorate([
    (0, common_1.Controller)('lists'),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListController);
exports.ListController = ListController;
//# sourceMappingURL=list.controller.js.map