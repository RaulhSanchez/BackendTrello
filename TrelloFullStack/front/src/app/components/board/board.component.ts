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
    });
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = {};
      this.loadTasks();
    });
  }

  updateTask(task: any): void {
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  updateTaskStatus(id: string, status: string): void {
    this.taskService.updateTaskStatus(id, status).subscribe(() => {
      this.loadTasks();
    });
  }
}
