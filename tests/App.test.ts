import { App } from "../App";

describe("App", () => {
  const Browser = new App("Opera", []);
  test("Testing method setName, should change App`s name", () => {
    Browser.setName("Chrome");
    expect(Browser.name).toBe("Chrome");
  });
  test("Testing method AddProject, array length should be 1", () => {
    expect(Browser.projects.length).toBe(0);
    Browser.addProject({
      tasks: [{ id: 40, durationInMin: 44, compeleted: false, developer: { id: 909, name: "Vasya" } }]
    });
    expect(Browser.projects.length).toBe(1);
  });
});
