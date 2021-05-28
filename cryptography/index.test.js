var { isCoprime, generateRSA } = require("./index");

describe("test of coprime", function () {
  it("should be a function", function () {
    expect(typeof isCoprime).toBe("function");
  });
  it("should be defined", function () {
    expect(isCoprime).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(isCoprime("1", "5")).toBe("Not a number");
  });
  it("should return true", function () {
    expect(isCoprime(0, 0)).toBe(false);
  });
  it("should return false", function () {
    expect(isCoprime(5, 6)).toBe(true);
  });
});

describe("test of generateRSA", function () {
  it("should be a function", function () {
    expect(typeof generateRSA).toBe("function");
  });
  it("should be defined", function () {
    expect(generateRSA).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(generateRSA("1", "5", "66")).toBe("Not a number");
  });
  it("should return decoded", function () {
    expect(generateRSA(3, 7, 5)).toBe(19);
  });
});
