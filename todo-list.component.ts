  
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component ({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    @ViewChildren(TaskComponent) taskComps: QueryList<TaskComponent>;
    tasks: Task[] = [];

    // task: Task;
    taskName: string;
    taskDescription: string;

    taskSelect: Task;

    addTask () {
        let tempTask: Task = {
            id: 'xxxxx',
            name: this.taskName,
            description: this.taskDescription,
        }
    this.tasks.push(tempTask);
        // this.tasks.push(this.task);
    }

    deleteTask(taskComponent: TaskComponent) {
       // this.tasks = this.tasks.filter(t => t.id !== taskComponent.taskObj.id);
        console.log(this.tasks);
        console.log(taskComponent);
        this.tasks = this.tasks.filter(t => t !== taskComponent.taskObj);
    }
selectedTask(taskComponent: TaskComponent) {
    this.clearSelected();
    taskComponent.isSelected = true;
    this.taskSelect = taskComponent.taskObj;
}

clearSelected() {
    this.taskComps.forEach(task => {
        task.isSelected = false;
    })
}
}