var {
  sumOfNumbers,
  getQuarter,
  sumOfPositive,
  getMaxNumber,
  getMark,
} = require("./conditionalStatements");

describe("test sum of numbers", function () {
  it("should be a function", function () {
    expect(typeof sumOfNumbers).toBe("function");
  });
  it("should be defined", function () {
    expect(sumOfNumbers()).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(sumOfNumbers("1", "5")).toBe("Not a number");
  });
  it("should return sum + of numbers", function () {
    expect(sumOfNumbers(1, 5)).toBe(6);
  });
  it("should return sum * of numbers", function () {
    expect(sumOfNumbers(2, 5)).toBe(10);
  });
});

describe("test get a quarter", function () {
  it("should be a function", function () {
    expect(typeof getQuarter).toBe("function");
  });
  it("should be defined", function () {
    expect(getQuarter()).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(getQuarter("1", "5")).toBe("Not a number");
  });
  it("1 quarter", function () {
    expect(getQuarter(1, 1)).toBe("Точка находится в четверти I");
  });
  it("2 quarter", function () {
    expect(getQuarter(-1, 1)).toBe("Точка находится в четверти II");
  });
  it("3 quarter", function () {
    expect(getQuarter(-1, -1)).toBe("Точка находится в четверти III");
  });
  it("4 quarter", function () {
    expect(getQuarter(1, -1)).toBe("Точка находится в четверти IV");
  });
});

describe("test sum of positive numbers", function () {
  it("should be a function", function () {
    expect(typeof sumOfPositive).toBe("function");
  });
  it("should be defined", function () {
    expect(sumOfPositive()).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(sumOfPositive("1", "2", "3")).toBe("Not a number");
  });
  it("should work with three arguments", function () {
    expect(sumOfPositive(1, 2, 3)).toBe(6);
  });
  it("should work with a positive number", function () {
    expect(sumOfPositive(-1, -2, -3)).toBe("not a positive number");
  });
});

describe("test max number", function () {
  it("should be a function", function () {
    expect(typeof getMaxNumber).toBe("function");
  });
  it("should be defined", function () {
    expect(getMaxNumber()).toBeDefined();
  });
  it("should work with numbers arguments", function () {
    expect(getMaxNumber("1", "2", "3")).toBe("Not a number");
  });
  it("should sum of multiplication numbers", function () {
    expect(getMaxNumber(1, 3, 3)).toBe(12);
  });
  it("should sum of addition numbers", function () {
    expect(getMaxNumber(1, 3, 1)).toBe(8);
  });
});

describe("test sum of positive numbers", function () {
  it("should be a function", function () {
    expect(typeof getMark).toBe("function");
  });
  it("should be defined", function () {
    expect(getMark()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(getMark("1")).toBe("Not a number");
  });
  it("should work with numbers 0-19", function () {
    expect(getMark(0, 19)).toBe("Your mark is F");
  });
  it("should work with numbers 20-39", function () {
    expect(getMark(20, 39)).toBe("Your mark is E");
  });
  it("should work with numbers 40-59", function () {
    expect(getMark(40, 59)).toBe("Your mark is D");
  });
  it("should work with numbers 60-74", function () {
    expect(getMark(60, 74)).toBe("Your mark is C");
  });
  it("should work with numbers 75-89", function () {
    expect(getMark(75, 89)).toBe("Your mark is B");
  });
  it("should work with numbers 90-100", function () {
    expect(getMark(90, 100)).toBe("Your mark is A");
  });
  it("should work with numbers 0-100", function () {
    expect(getMark(101)).toBe("Your mark is impossible :)");
  });
});
