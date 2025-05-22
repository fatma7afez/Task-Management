import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  constructor(private _tasksService:TasksService){}

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isOpenAddTaskDialog: boolean = false;

  get selectedUserTask() {
    return this._tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    this._tasksService.removeTask(id)
  }

  onAddTask(): boolean {
    return (this.isOpenAddTaskDialog = true);
  }

  onCancelTask(): boolean {
    return (this.isOpenAddTaskDialog = false);
  }

  onNewAddTask(newTask: NewTaskData) {
   this._tasksService.addTask(newTask , this.userId);

   // to close dialog after push data
    this.onCancelTask();
  }
}
