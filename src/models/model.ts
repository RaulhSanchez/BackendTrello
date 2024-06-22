// backend/src/models/task.model.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'done';
}

const taskSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['to-do', 'in-progress', 'done'], default: 'to-do' }
});

export const Task = mongoose.model<ITask>('Task', taskSchema);
