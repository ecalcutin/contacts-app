import { Schema } from 'mongoose';

import { PhoneRef } from './phone.schema';

export const UserRef = 'Users';

export const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    phones: {
        type: [Schema.Types.ObjectId],
        ref: PhoneRef,
        default: []
    }
}, {
    timestamps: true
});