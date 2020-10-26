import { Document } from 'mongoose';

export interface User {
    readonly name: string;
    readonly phones: Array<string>;
}
export interface UserModel extends User, Document { }