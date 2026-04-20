import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
  private route = inject(ActivatedRoute);
  taskId = Number(this.route.snapshot.paramMap.get('id'));
  taskService = inject(Tasks);
  task = this.taskService.getTaskById(this.taskId);

  ngOnInit() {
    console.log('this.route', this.task);
  }
}
