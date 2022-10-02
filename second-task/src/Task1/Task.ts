import { ITask, IUser } from "./types";

export class Task implements ITask {
  id: number;
  durationInMin: number;
  compeleted: boolean;
  developer: IUser;

  constructor(id: number, durationInMin: number, compeleted: boolean, developer: IUser) {
    this.id = id;
    this.durationInMin = durationInMin;
    this.compeleted = compeleted;
    this.developer = developer;
  }
  getInfo() {
    let info: string = `#${this.id} ${this.durationInMin} ${this.compeleted ? "completed" : "not completed"}`;
    return info;
  }
}
