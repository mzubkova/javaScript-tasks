var { nameOfDay } = require("./functions");

describe("test name of the day", function () {
  afterEach(() => {
    jest.clearAllMocks();
  });
  var expected = ["Sunday", "Monday"];
  it("should be a function", function () {
    expect(typeof nameOfDay).toBe("function");
  });
  it("should be defined", function () {
    expect(nameOfDay()).toBeDefined();
  });
  it("should return Monday", function () {
    var mockDate = new Date(1466424490000);
    var spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    expect(nameOfDay()).toBe("Monday");
    spy.mockRestore();
  });
  it("should return Thursday", function () {
    var mockDate = new Date(1619686280549);
    var spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    expect(nameOfDay()).toBe("Thursday");
  });
});
