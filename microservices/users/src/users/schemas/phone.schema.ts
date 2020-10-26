import { Schema } from 'mongoose';

export const PhoneRef = 'Phones';

export const PhoneSchema = new Schema({
    value: {
        type: String,
        unique: true,
        required: true
    },
}, {
    timestamps: true
});