import { Component, ɵisListLikeIterable } from '@angular/core';

class Task {
  constructor(
    public description: string = "",
    public isDone: boolean = false,
    public assignedPerson: string = ""
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tasks: Task[] = [];
  public onlyShowUndoneTasks: boolean;
  public assignedToFilter: string | undefined;
  public newTask: Task;
  private assignees: string[]
  public isInEditMode: boolean;

  constructor() {
    this.assignees= [
      "Thomas Gallner","Robin Mayrhofer", "Max Mustermann", "Maria Musterfrau"
    ];

    this.tasks = [
      new Task("do Angular homework", false, this.assignees[0]),
      new Task("do German homework", false, this.assignees[1]),
      new Task("do C# homework", false),
      new Task("do the dishes", true, this.assignees[0]),
    ];

    this.onlyShowUndoneTasks = false;
    this.assignedToFilter = '';
    this.isInEditMode = false;
    this.newTask = new Task();
  }

  public getTasks(): Task[] {
    let result: Task[] = this.tasks;

    if(this.onlyShowUndoneTasks){
      result = result.filter(
        (task) => !task.isDone
      );
    }
    if(this.assignedToFilter !== ""){
      result = result.filter(
        (task) => task.assignedPerson == this.assignedToFilter
      );
    }

    return result;
  }

  public getAssignees(): string[]{
    return this.assignees;
  }

  public createNewTask() {
    this.tasks.push(this.newTask);
    this.newTask = new Task();
  }

  public toggleEditMode(){
    this.isInEditMode = !this.isInEditMode;
  }
}
