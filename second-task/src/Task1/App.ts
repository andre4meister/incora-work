import { IApp, IProject } from "./types";

export class App implements IApp {
  name: string;
  projects: IProject[];
  constructor(name: string, projects: IProject[]) {
    this.name = name;
    this.projects = projects;
  }
  setName(name: string) {
    this.name = name;
  }
  addProject(project: IProject): void {
    this.projects.push(project);
  }
}
