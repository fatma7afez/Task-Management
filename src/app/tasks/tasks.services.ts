import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({providedIn:'root'})

export class TasksService {
  tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => {
      return task.userId === userId;
    });
  }

  addTask(newTask: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
  }

  removeTask(id:string){
     this.tasks.splice(
      this.tasks.findIndex((task) => task.id === id),
      1
    );
  }
}
