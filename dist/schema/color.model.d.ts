import { Document } from 'mongoose';
export declare class Color extends Document {
    name: string;
    value: string;
}
export declare const ColorSchema: import("mongoose").Schema<Color, import("mongoose").Model<Color, any, any, any>, {}>;
