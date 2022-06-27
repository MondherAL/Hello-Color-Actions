const people = require("./people");
describe("My people", () => {
  test("works", () => {
    expect(people.people()).toEqual("People Possible");
  });
});
