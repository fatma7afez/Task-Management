import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = DUMMY_TASKS;
  isOpenAddTaskDialog: boolean = false;

  get selectedUserTask() {
    return this.tasks.filter((task) => {
      return task.userId === this.userId;
    });
  }

  onCompleteTask(id: string) {
    this.tasks.splice(
      this.tasks.findIndex((task) => task.id === id),
      1
    );
  }

  onAddTask(): boolean {
    return (this.isOpenAddTaskDialog = true);
  }

  onCancelTask(): boolean {
    return (this.isOpenAddTaskDialog = false);
  }

  onNewAddTask(newTask: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
   // to close dialog after push data
    this.onCancelTask()
  }
}
