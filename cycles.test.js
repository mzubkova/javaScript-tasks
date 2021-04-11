var {
  sumOfEvenNumbers,
  checkSimpleNumber,
  getSqrtOfNumber,
  binarySearch,
  getFactorial,
  sumOfDigits,
  getReverseNumber,
} = require("./cycles");

describe("test sum of even numbers", function () {
  it("should be a function", function () {
    expect(typeof sumOfEvenNumbers).toBe("function");
  });
  it("should be defined", function () {
    expect(sumOfEvenNumbers()).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(sumOfEvenNumbers("1", "5")).toBe("Not a number");
  });
  it("should return sum of even numbers", function () {
    expect(sumOfEvenNumbers(1, 99)).toBe(2450);
  });
});

describe("test check simple number", function () {
  it("should be a function", function () {
    expect(typeof checkSimpleNumber).toBe("function");
  });
  it("should be defined", function () {
    expect(checkSimpleNumber()).toBeDefined();
  });
  it("should work with numeric arguments", function () {
    expect(checkSimpleNumber("1")).toBe("Not a number");
  });
  it("should return true", function () {
    expect(checkSimpleNumber(2)).toBe(true);
  });
  it("should return false", function () {
    expect(checkSimpleNumber(4)).toBe(false);
  });
});

describe("test get a square of number", function () {
  it("should be a function", function () {
    expect(typeof getSqrtOfNumber).toBe("function");
  });
  it("should be defined", function () {
    expect(getSqrtOfNumber()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(getSqrtOfNumber("1")).toBe("Not a number");
  });
  it("should return a square", function () {
    expect(getSqrtOfNumber(16)).toBe(4);
  });
  it("should return a square", function () {
    expect(getSqrtOfNumber(17)).toBe(4);
  });
});

describe("test get a square of number (binary)", function () {
  it("should be a function", function () {
    expect(typeof binarySearch).toBe("function");
  });
  it("should be defined", function () {
    expect(binarySearch()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(binarySearch("1")).toBe("Not a number");
  });
  it("should return a square", function () {
    expect(binarySearch(16)).toBe(4);
  });
  it("should return a square", function () {
    expect(binarySearch(17)).toBe(4);
  });
});

describe("test get a factorial of number", function () {
  it("should be a function", function () {
    expect(typeof getFactorial).toBe("function");
  });
  it("should be defined", function () {
    expect(getFactorial()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(getFactorial("1")).toBe("Not a number");
  });
  it("should return factorial", function () {
    expect(getFactorial(4)).toBe(24);
  });
});

describe("test get a sum of digits number", function () {
  it("should be a function", function () {
    expect(typeof sumOfDigits).toBe("function");
  });
  it("should be defined", function () {
    expect(sumOfDigits()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(sumOfDigits("1")).toBe("Not a number");
  });
  it("should return sum of digits", function () {
    expect(sumOfDigits(123)).toBe(6);
  });
});

describe("test get reserve number", function () {
  it("should be a function", function () {
    expect(typeof getReverseNumber).toBe("function");
  });
  it("should be defined", function () {
    expect(getReverseNumber()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(getReverseNumber("1")).toBe("Not a number");
  });
  it("should return reserve number", function () {
    expect(getReverseNumber(123)).toBe(321);
  });
});
