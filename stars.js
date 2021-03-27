var whitespace = " ";
var star = "* ";
var newLine = "\n";

function showSquareOfStars(limit) {
  var output = "";
  for (var i = 1; i < limit; i++) {
    for (var j = 1; j < limit; j++) {
      output += star;
    }
    output += star + newLine;
  }
  return output;
}

function showSquareOfStars2(limit) {
  var output = "";
  for (let i = 0; i < limit; ++i) output += star;
  output += newLine;
  if (limit > 2) {
    for (let i = 0; i < limit - 2; ++i) {
      output += star;
      for (let j = 0; j < limit - 2; ++j) output += whitespace + whitespace;
      output += star + newLine;
    }
  }
  if (limit > 1) for (let i = 0; i < limit; ++i) output += star;
  return output;
}

function showTriangleOfStars(limit) {
  var output = "";
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < limit; j++) {
      if (i === 0 || j === limit - 1 - i || j === 0) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}

function showTriangleOfStars2(limit) {
  var output = "";
  for (var i = 1; i <= limit; i++) {
    for (var j = 1; j <= limit; j++) {
      if (j === 1 || i === limit || j === i) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}

function showTriangleOfStars3(limit) {
  var output = "";
  for (var i = 1; i <= limit; i++) {
    for (var j = 1; j <= limit; j++) {
      if (j === limit || i === limit || i === limit + 1 - j) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}

function showTriangleOfStars4(limit) {
  var output = "";
  for (var i = 1; i <= limit; i++) {
    for (var j = 1; j <= limit; j++) {
      if (j === limit || i === 1 || j === i) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}

function showCrossOfStars(limit) {
  var output = "";
  for (var i = 1; i <= limit; i++) {
    for (var j = 1; j <= limit; j++) {
      if (i === 0 || i === limit + 1 - j || j === i) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}

function showTriangleOfStars5(limit) {
  var output = "";
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < limit; j++) {
      if (i > 3) {
        output += whitespace;
      } else if (i === 0 || i === limit - 1 - j || i === j) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}

function showTriangleOfStars6(limit) {
  var output = "";
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < limit; j++) {
      if (i < 3) {
        output += whitespace;
      } else if (i === limit - 1 || i === limit - 1 - j || i === j) {
        output += star;
      } else {
        output += whitespace + whitespace;
      }
    }
    output += newLine;
  }
  return output;
}
