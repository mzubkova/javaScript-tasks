const { it, expect } = require("@jest/globals");
var { LinkedList } = require("./LList");

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
