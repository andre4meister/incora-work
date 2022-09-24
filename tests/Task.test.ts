import { Task } from "../Task";

describe("Task", () => {
  const FirstTask = new Task(50, false, { id: 909, name: "Vasya" });
  test("Testing Task constructor", () => {
    expect(FirstTask.durationInMin).toBe(50);
    expect(FirstTask.compeleted).toBe(false);
    expect(JSON.stringify(FirstTask.developer)).toBe(JSON.stringify({ id: 909, name: "Vasya" }));
  });
  test("testing method getInfo", () => {
    expect(Boolean(FirstTask.id)).toBe(true);
    expect(FirstTask.getInfo().includes("#")).toBe(true);
    expect(FirstTask.getInfo().includes("50")).toBe(true);
    expect(FirstTask.getInfo().includes("completed")).toBe(true);
  });
});
