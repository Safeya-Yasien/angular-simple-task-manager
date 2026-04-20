import { Injectable, signal } from '@angular/core';

interface ITask {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  private tasksSignal = signal<ITask[]>([
    {
      id: 1,
      title: 'Learn Angular basics',
      description: 'Understand components, routing, and services',
      isDone: false,
      createdAt: new Date('2026-04-20'),
    },
    {
      id: 2,
      title: 'Build Task Manager UI',
      description: 'Create navbar, footer, and task pages using Tailwind',
      isDone: false,
      // year-month-day
      createdAt: new Date('2026-04-20'),
    },
  ]);

  tasks = this.tasksSignal.asReadonly();

  getTaskById(id: number) {
    return this.tasks().find((task) => task.id === id);
  }
}
