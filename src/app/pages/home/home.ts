import { Component, inject } from '@angular/core';
import { Tasks } from '../../services/tasks';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  taskService = inject(Tasks);

  activeFilter: 'all' | 'completed' | 'pending' = 'all';

  filterTasks() {
    switch (this.activeFilter) {
      case 'completed':
        return this.taskService.completedTasks();
      case 'pending':
        return this.taskService.pendingTasks();

      default:
        return this.taskService.tasks();
    }
  }
}
