var line = 7;
var star = "*";
var whitespace = " ";

function showSquareOfStars(star) {
  var output = "";
  for (var i = 0; i < line; i++) {
    for (var j = 0; j < line; j++) {
      output += star;
    }
    output += `${star} \n`;
  }
  return output;
}

console.log(showSquareOfStars(star));

// function showSquareOfStars2(line) {
//   var line1 = star.repeat(line);
//   var output;
//   var line2 = star + whitespace.repeat(line - 2) + star + "\n";
//   if (line > 2) {
//     output = line2.repeat(line - 2);
//   } else {
//     output = "";
//   }
//   output = line1 + "\n" + output;
//   if (line > 2) output += line1;
//   return output;
// }

// console.log(showSquareOfStars2(7));

function showSquareOfStars3() {
  var newLine = "\n";
  var output = "";
  // верхняя линия
  for (let i = 0; i < line; ++i) output += star;
  output += newLine;
  if (line > 2) {
    for (let i = 0; i < line - 2; ++i) {
      output += star;
      for (let j = 0; j < line - 2; ++j) output += whitespace;
      output += star + newLine;
    }
  }
  // нижняя линяя
  if (line > 1) for (let i = 0; i < line; ++i) output += star;
  return output;
}

console.log(showSquareOfStars3());

function showTriangleOfStars() {
  var newLine = "\n";
  var output = "";
  // верхняя линия
  for (let i = 0; i < line; ++i) output += star;
  output += newLine;
  if (line > 1) {
    for (let i = 1; i < line; ++i) {
      output += star;
      if (i === 6) {
        return output;
      } else {
        for (let j = line - 3; j >= i; --j) output += whitespace;
        output += star + newLine;
      }
    }
  }
  return output;
}

console.log(showTriangleOfStars());

// function showTriangleOfStars2() {
//   var newLine = "\n";
//   var output = "";
//   for (var f = 0; f < line; ++f) {
//     output += newLine;
//     for (var k = 1; k <= f; ++k) {
//       output += star;
//       if (k === 6) {
//         return output;
//       } else {
//         for (let f = line - 5; f <= k; ++f) output += whitespace;
//         output += star + newLine;
//       }
//     }
//   }
//   return output;
// }
// console.log(showTriangleOfStars2());

