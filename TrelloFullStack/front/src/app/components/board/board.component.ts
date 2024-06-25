// src/app/components/board/board.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tasks: any[] = [];
  newTask: any = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks loaded:', this.tasks); // Log de depuración
    });
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = {};
      this.loadTasks();
      console.log('Task created:', this.newTask); // Log de depuración
    });
  }

  updateTaskStatus(id: string, status: string): void {
    console.log(`Updating task status: ${id}, ${status}`); // Log de depuración
    this.taskService.updateTaskStatus(id, status).subscribe(() => {
      this.loadTasks();
      console.log(`Task status updated: ${id}, ${status}`); // Log de depuración
    });
  }

  deleteTask(id: string): void {
    console.log(`Deleting task: ${id}`); // Log de depuración
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
      console.log(`Task deleted: ${id}`); // Log de depuración
    });
  }
}
