import { computed, Injectable, signal } from '@angular/core';

interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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
      completed: false,
      createdAt: new Date('2026-04-20'),
    },
    {
      id: 2,
      title: 'Build Task Manager UI',
      description: 'Create navbar, footer, and task pages using Tailwind',
      completed: false,
      // year-month-day
      createdAt: new Date('2026-04-20'),
    },
  ]);

  tasks = this.tasksSignal.asReadonly();
  notification = signal<string | null>(null);

  completedTasks = computed(() => {
    return this.tasksSignal().filter((task) => task.completed);
  });

  pendingTasks = computed(() => {
    return this.tasksSignal().filter((task) => !task.completed);
  });

  getTaskById(id: number) {
    return this.tasks().find((task) => task.id === id);
  }

  addTask(title: string, description: string) {
    const newTask: ITask = {
      id: this.tasks().length + 1,
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    this.tasksSignal.update((tasks) => [...tasks, newTask]);

    this.notification.set('Task added successfully');

    setTimeout(() => {
      this.notification.set(null);
    }, 3000);
  }
}
