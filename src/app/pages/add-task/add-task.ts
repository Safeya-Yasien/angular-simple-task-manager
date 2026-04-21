import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  taskService = inject(Tasks);

  private formBuilder = inject(FormBuilder);
  taskForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  onSubmit() {
    if (this.taskForm.valid) {
      const { title, description } = this.taskForm.value;

      if (title && description) {
        this.taskService.addTask(title, description);
        this.taskForm.reset();
      }
    }
  }
}
