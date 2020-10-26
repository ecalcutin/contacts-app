import { Document } from 'mongoose';

export interface User { }
export interface UserModel extends User, Document { }