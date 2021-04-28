var {
  tickets,
  // getSum,
  // getQuntityPostsByAuthor,
  // cachedFunc,
} = require("./closure");

describe("test of tickets", function () {
  var expected = [25, 25, 50];
  it("should be a function", function () {
    expect(typeof tickets).toBe("function");
  });
  it("should work with array", function () {
    expect([25, 25, 50]).toEqual(expect.arrayContaining(expected));
  });
  it("should work with array", function () {
    expect(tickets("15, 99")).toBe("Not an array");
  });
  it("should return string answer", function () {
    expect(tickets([25, 25, 50])).toBe("YES");
  });
  it("should return string answer", function () {
    expect(tickets([25, 25, 100])).toBe("NO");
  });
  it("should return string answer", function () {
    expect(tickets(["25", "25", "50", "100"])).toBe("YES");
  });
  it("should return string answer", function () {
    expect(tickets(["25", "50", "100"])).toBe("NO");
  });
});

// describe("test of sum", function () {
//   var expected = [25, 25, 50];
//   it("should be a function", function () {
//     expect(typeof getSum).toBe("function");
//   });
//   it("should work with string", function () {
//     expect(getSum(15, 99)).toBe("Not a string");
//   });
//   it("should return string answer", function () {
//     expect(getSum("123", "324")).toBe("447");
//   });
// });

// describe("test of post and commemts", function () {
//   it("should be a function", function () {
//     expect(typeof getQuntityPostsByAuthor).toBe("function");
//   });
// });
