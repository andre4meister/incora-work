import { IProject, ITask } from "./types";

export class Project implements IProject {
  tasks: ITask[];
  constructor(tasks: ITask[]) {
    this.tasks = tasks;
  }
  addTask(task: ITask): void {
    this.tasks.push(task);
  }
  editTask(task: Partial<ITask>): void {
    let searchebleTask = this.tasks.filter((obj) => obj.id === task.id)[0];
    let arrayForChanges = Object.keys(task);
    for (let key in arrayForChanges) {
      //@ts-ignore
      if (task[key] !== undefined) searchebleTask[key] = task[key];
    }
  }
  deleteTask(id: number): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks.splice(i, 1);
      }
    }
  }
  getTotalTime(): number {
    let total = 0;
    this.tasks.forEach((task) => (total += task.durationInMin));
    return total;
  }
  getAllTasksByDeveloper(id: number): ITask[] {
    return this.tasks.filter((task) => task.developer.id === id);
  }
}
