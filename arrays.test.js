var {
  getLeastNumber,
  getBiggestNumber,
  getIndexOfMin,
  getIndexOfMax,
  sumOfOddIndex,
  getReverseNumber,
  getOddElements,
  getReverseArray,
  bubbleSort,
  selectSort,
  insertSort,
} = require("./arrays");

describe("test of max number", function () {
  var expected = [1, 2, 3, 4, 5, 6];
  it("should be a function", function () {
    expect(typeof getLeastNumber).toBe("function");
  });
  it("should work with array", function () {
    expect([1, 2, 3, 4, 5, 6]).toEqual(expect.arrayContaining(expected));
  });
  it("should work with array", function () {
    expect(getLeastNumber("15, 99")).toBe("Not an array");
  });
  it("should return max number", function () {
    expect(getLeastNumber([15, 99, 6, 1, 77])).toBe(1);
  });
});

describe("test of min number", function () {
  it("should be a function", function () {
    expect(typeof getBiggestNumber).toBe("function");
  });
  it("should work with array", function () {
    expect(getBiggestNumber("15, 99")).toBe("Not an array");
  });
  it("should return min number", function () {
    expect(getBiggestNumber([15, 99, 6, 1, 77])).toBe(99);
  });
});

describe("test of index min number", function () {
  it("should be a function", function () {
    expect(typeof getIndexOfMin).toBe("function");
  });
  it("should work with array", function () {
    expect(getIndexOfMin("15, 99")).toBe("Not an array");
  });
  it("should return min index", function () {
    expect(getIndexOfMin([15, 99, 6, 1, 77])).toBe(3);
  });
});

describe("test of index max number", function () {
  it("should be a function", function () {
    expect(typeof getIndexOfMax).toBe("function");
  });
  it("should work with array", function () {
    expect(getIndexOfMax("15, 99")).toBe("Not an array");
  });
  it("should return max index", function () {
    expect(getIndexOfMax([15, 99, 6, 1, 77])).toBe(1);
  });
});

describe("test of sum odd numbers", function () {
  it("should be a function", function () {
    expect(typeof sumOfOddIndex).toBe("function");
  });
  it("should work with array", function () {
    expect(sumOfOddIndex("15, 99")).toBe("Not an array");
  });
  it("should return sum", function () {
    expect(sumOfOddIndex([1, 3, 2, 4])).toBe(7);
  });
});

describe("test of reverse array", function () {
  it("should be a function", function () {
    expect(typeof getReverseNumber).toBe("function");
  });
  it("should work with array", function () {
    expect(getReverseNumber("15, 99")).toBe("Not an array");
  });
  it("should return reverse array", function () {
    expect(getReverseNumber([1, 3, 24, 4])).toStrictEqual([4, 24, 3, 1]);
  });
});

describe("count the number of odd elements", function () {
  it("should be a function", function () {
    expect(typeof getOddElements).toBe("function");
  });
  it("should work with array", function () {
    expect(getOddElements("15, 99")).toBe("Not an array");
  });
  it("should return the number of odd elements", function () {
    expect(getOddElements([1, 5, 24, 8])).toBe(6);
  });
});

describe("test of reverse half of array", function () {
  it("should be a function", function () {
    expect(typeof getReverseArray).toBe("function");
  });
  it("should work with array", function () {
    expect(getReverseArray("15, 99")).toBe("Not an array");
  });
  it("should return reverse half of array", function () {
    expect(getReverseArray([1, 5, 24, 8])).toStrictEqual([24, 8, 1, 5]);
  });
  it("should return reverse half of array odd", function () {
    expect(getReverseArray([1, 5, 24, 8, 5])).toStrictEqual([8, 5, 1, 5, 24]);
  });
});

describe("test test sort of array", function () {
  it("should be a function", function () {
    expect(typeof bubbleSort).toBe("function");
  });
  it("should work with array", function () {
    expect(bubbleSort("15, 99")).toBe("Not an array");
  });
  it("should return bubble sort of array", function () {
    expect(bubbleSort([1, 5, 24, 8, 5])).toStrictEqual([1, 5, 5, 8, 24]);
  });
});

describe("test sort of array", function () {
  it("should be a function", function () {
    expect(typeof selectSort).toBe("function");
  });
  it("should work with array", function () {
    expect(selectSort("15, 99")).toBe("Not an array");
  });
  it("should return select sort of array", function () {
    expect(selectSort([1, 5, 24, 8, 5])).toStrictEqual([1, 5, 5, 8, 24]);
  });
});

describe("test sort of array", function () {
  it("should be a function", function () {
    expect(typeof insertSort).toBe("function");
  });
  it("should work with array", function () {
    expect(insertSort("15, 99")).toBe("Not an array");
  });
  it("should return insert sort of array", function () {
    expect(insertSort([1, 5, 24, 8, 5])).toStrictEqual([1, 5, 5, 8, 24]);
  });
});
