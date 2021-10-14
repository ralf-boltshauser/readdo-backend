import { Model } from 'mongoose';
import { Color } from 'src/schema/color.model';
export declare class ColorService {
    private readonly colorModel;
    constructor(colorModel: Model<Color>);
    findAll(): Promise<(Color & {
        _id: any;
    })[]>;
}
