import { Task } from "../Task";

describe("Task", () => {
  const FirstTask = new Task(55525, 50, false, { id: 909, name: "Vasya" });
  test("Testing Task constructor", () => {
    expect(FirstTask.id).toBe(55525);
    expect(FirstTask.durationInMin).toBe(50);
    expect(FirstTask.compeleted).toBe(false);
    expect(JSON.stringify(FirstTask.developer)).toBe(JSON.stringify({ id: 909, name: "Vasya" }));
  });
  test("testing method getInfo", () => {
    expect(FirstTask.getInfo().includes("#55525")).toBe(true);
    expect(FirstTask.getInfo().includes("completed")).toBe(true);
  });
});
