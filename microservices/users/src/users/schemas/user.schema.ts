import { Schema } from 'mongoose';

export const UserRef = 'Users';

export const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    phones: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});