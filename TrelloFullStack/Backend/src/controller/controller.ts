// backend/src/controllers/task.controller.ts

import { Request, Response } from 'express';
import { Task } from '../models/model';

// Función para crear una nueva tarea
export async function createTask(req: Request, res: Response) {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {        
        res.status(400).send(error);
    }
}

// Función para obtener todas las tareas
export async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Función para actualizar una tarea
export async function updateTask(req: Request, res: Response) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Función para eliminar una tarea
export async function deleteTask(req: Request, res: Response) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
}