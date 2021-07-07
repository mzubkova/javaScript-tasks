const { it, expect } = require("@jest/globals");
var { ArrayList } = require("./LList");
var { LinkedList } = require("./LList");

describe("ArrayList", function () {
  it("ArrayList should be defined", function () {
    expect("ArrayList").toBeDefined();
  });
  it("ArrayList should be function", function () {
    expect(typeof ArrayList).toBe("function");
  });
  it("alist should be object", function () {
    var alist = new ArrayList(7);
    expect(typeof alist).toBe("object");
  });
  it("should create array with capacity 7", function () {
    var alist = new ArrayList(7);
    expect(alist.capacity).toBe(7);
    alist.clear();
  });
  it("should add element to array", function () {
    var alist = new ArrayList();
    alist.add(7);
    expect(alist.array).toContain(7);
    alist.clear();
  });
  it("clear's argument should be array", function () {
    var alist = new ArrayList(7);
    alist.add(7);
    alist.clear();
    expect(alist.size).toBe(0);
  });
  it("should return size of array", function () {
    var alist = new ArrayList(7);
    alist.add(7);
    expect(alist.getSize()).toBe(1);
    alist.clear();
  });
  it("should add element to array", function () {
    var alist = new ArrayList(7);
    alist.add(9);
    expect(alist.array).toEqual([
      9,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
    alist.clear();
  });
  it("should set element at index", function () {
    var alist = new ArrayList(7);
    alist.set(4, 2);
    expect(alist.array).toEqual([
      undefined,
      undefined,
      4,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
    alist.clear();
  });
  it("should return element by index", function () {
    var alist = new ArrayList(7);
    alist.add(9);
    expect(alist.get(0)).toBe(9);
    alist.clear();
  });
  it("should remove element by index", function () {
    var alist = new ArrayList(7);
    alist.add(9);
    alist.add(9);
    alist.add(9);
    expect(alist.remove(0)).toBe(9);
    alist.clear();
  });
  it("should be array", function () {
    var alist = new ArrayList(7);
    expect(Array.isArray(alist.toArray())).toBe(true);
    alist.clear();
  });
  it("should be string and return string", function () {
    var alist = new ArrayList([1, 2]);
    expect(alist.toString()).toBe("1,2");
    alist.clear();
  });
  it("should contain number and return false", function () {
    var alist = new ArrayList([1, 2, 3, 4, 5]);
    expect(alist.contains(1)).toBe(true);
    expect(alist.contains(3)).toBe(true);
    expect(alist.contains(5)).toBe(true);
    expect(alist.contains(6)).toBe(false);
    alist.clear();
  });
  it("should return min value of an array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.minValue()).toBe(1);
    alist.clear();
  });
  it("should return max value of an array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.maxValue()).toBe(9);
    alist.clear();
  });
  it("should return index of min value of an array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.minIndex()).toBe(5);
    alist.clear();
  });
  it("should return index of max value of an array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.maxIndex()).toBe(6);
    alist.clear();
  });
  it("should reverse an array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.reverse()).toStrictEqual([2, 9, 1, 8, 4, 7, 6, 4]);
    alist.clear();
  });
  it("should reverse half of array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.halfReverse()).toStrictEqual([8, 1, 9, 2, 4, 6, 7, 4]);
    alist.clear();
  });
  it("should remove elements from array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 8, 1, 9, 2]);
    expect(alist.removeAll([7, 8])).toStrictEqual([
      4,
      6,
      undefined,
      4,
      undefined,
      1,
      9,
      2,
    ]);
    alist.clear();
  });
  it("should retain elements from array", function () {
    var alist = new ArrayList([4, 6, 7, 4, 4, 8, 1, 9, 2]);
    alist.retainAll([4, 6]);
    expect(alist.array).toStrictEqual([
      4,
      6,
      undefined,
      4,
      4,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
    alist.clear();
  });
  it("should sort array", function () {
    var alist = new ArrayList([3, 2, 4, 1]);
    expect(alist.sort()).toStrictEqual([1, 2, 3, 4]);
    alist.clear();
  });
});

describe("LinkedList", function () {
  it("LinkedList should be defined", function () {
    expect("LinkedList").toBeDefined();
  });
  it("LinkedList should be function", function () {
    expect(typeof LinkedList).toBe("function");
  });
  it("llist should be object", function () {
    var llist = new LinkedList(7);
    expect(typeof llist).toBe("object");
    llist.clear();
  });
  it("should clear an array", function () {
    var llist = new LinkedList();
    llist.add(1);
    llist.clear();
    expect(llist.getSize()).toBe(0);
  });
  it("should return size of an array", function () {
    var llist = new LinkedList();
    llist.add(1);
    expect(llist.getSize()).toBe(1);
    llist.clear();
  });
  it("should add element to an array", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(4);
    llist.add(94);
    var expected = [19, 4, 94];
    expect(llist.toArray()).toEqual(expected);
    llist.clear();
  });
  it("should remove element from an array", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(4);
    llist.add(94);
    var expectedValue = 19;
    var expectedArray = [4, 94];
    expect(llist.remove(19)).toBe(expectedValue);
    expect(llist.toArray()).toEqual(expectedArray);
    llist.clear();
  });
  it("should become an array", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(98);
    llist.toArray();
    var expectedArray = [19, 14, 98];
    expect(llist.toArray()).toEqual(expectedArray);
    llist.clear();
  });
  it("should return element by index", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(98);
    llist.toArray();
    expect(llist.get(19)).toBe(0);
    llist.clear();
  });
  it("should set element at index", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(98);
    llist.set(77, 1);
    llist.toArray();
    var expectedArray = [19, 77, 14, 98];
    expect(llist.toArray()).toEqual(expectedArray);
    llist.clear();
  });
  it("should contain element", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(98);
    expect(llist.contains(14)).toBe(true);
    llist.clear();
  });
  it("should not contain not contained element", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(98);
    expect(llist.contains(16)).toBe(false);
    llist.clear();
  });
  it("should return min value", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(98);
    var expectedValue = 14;
    expect(llist.minValue()).toBe(expectedValue);
    llist.clear();
  });
  it("should return max value", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(111);
    var expectedValue = 111;
    expect(llist.maxValue()).toBe(expectedValue);
    llist.clear();
  });
  it("should reverse", function () {
    var llist = new LinkedList();
    var testArray = [3, 2, 1];
    var testRoot = {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    };
    llist.__reverseList = jest.fn().mockReturnValue(testRoot);
    llist.add(1);
    llist.add(2);
    llist.add(3);
    var oldArray = llist.toArray();
    llist.reverse();
    expect(llist.__reverseList).toHaveBeenCalledTimes(1);
    expect(llist.toArray()).toEqual(testArray);
    expect(llist.toArray()).not.toEqual(oldArray);
    expect(llist.root).toEqual(testRoot);
    llist.clear();
  });
  it("should return max index", function () {
    var llist = new LinkedList();
    llist.add(19);
    llist.add(14);
    llist.add(21);
    var expectedValue = 2;
    expect(llist.maxIndex()).toBe(expectedValue);
    llist.clear();
  });
  it("should return string of linkedList items values", function () {
    var llist = new LinkedList();
    llist.add(1);
    llist.add(2);
    llist.add(3);
    llist.add(4);
    llist.add(5);
    var testString = "1,2,3,4,5";
    expect(llist.toString()).toBe(testString);
    llist.clear();
  });
  it("should remove all elements", function () {
    var llist = new LinkedList();
    llist.add(1);
    llist.add(2);
    expect(llist.removeAll([])).toBe();
    llist.clear();
  });
});
