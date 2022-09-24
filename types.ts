export interface IApp {
  name: string;
  setName(name: string): void;
  projects: IProject[];
  addProject(project: IProject): void;
}

export interface IUser {
  id: number;
  name: string;
}

export interface IProject {
  tasks: ITask[];
  addTask?: (task: ITask) => void;
  editTask?: (task: Partial<ITask>) => void;
  deleteTask?: (id: number) => void;
  getTotalTime?: () => number;
  getAllTasksByDeveloper?: (id: number) => ITask[];
}

export interface ITask {
  id: number;
  durationInMin: number;
  compeleted: boolean;
  developer: IUser;
  getInfo?: () => string;
}
