import { Project } from "./../Project";

describe("Project", () => {
  const FirstProject = new Project([
    { id: 8525, durationInMin: 20, compeleted: false, developer: { id: 919, name: "Pablo" } },
    { id: 1625, durationInMin: 70, compeleted: false, developer: { id: 919, name: "Pablo" } }
  ]);
  test("Testing method addTask", () => {
    expect(FirstProject.tasks.length).toBe(2);
    FirstProject.addTask({ id: 55525, durationInMin: 50, compeleted: false, developer: { id: 909, name: "Vasya" } });
    expect(FirstProject.tasks.length).toBe(3);
  });
  test("testing method deleteTask", () => {
    FirstProject.deleteTask(55525);
    expect(FirstProject.tasks.length).toBe(2);
  });
  test("testing method editTask", () => {
    function testEditTask() {
      let newChanges = { id: 8525, compeleted: true, durationInMin: 56 };
      FirstProject.editTask(newChanges);
      let arrayKeys = Object.keys(FirstProject);
      const checkTask = FirstProject.tasks.filter((task) => task.id === 8525);
      for (let key in arrayKeys) {
        if (newChanges[key]) {
          if (checkTask[key] !== newChanges[key]) return false;
        }
        return true;
      }
    }
    expect(testEditTask()).toBe(true);
  });
  test("testing method getTotalTime", () => {
    expect(FirstProject.getTotalTime()).toBe(90);
  });
  test("testing method getAllTasksByDeveloper", () => {
    expect(FirstProject.getAllTasksByDeveloper(919).length).toBe(2);
  });
});
