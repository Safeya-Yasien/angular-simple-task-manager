import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddTask } from './pages/add-task/add-task';
import { TaskDetails } from './pages/task-details/task-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'add-task',
    component: AddTask,
  },
  {
    path: 'task/:id',
    component: TaskDetails,
  },
];
