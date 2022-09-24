import { User } from "./../User";

describe("User", () => {
  test("Testing User constructor", () => {
    const Man = new User(50, "Vasya");
    expect(Man.name).toBe("Vasya");
    expect(Man.id).toBe(50);
  });
});
