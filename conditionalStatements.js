// 1.	Если а – четное посчитать а*б, иначе а+б

function sumOfNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Not a number";
  }
  var sum = 0;
  num1 % 2 === 0 ? (sum = num1 * num2) : (sum = num1 + num2);
  return sum;
}

// 2.	Определить какой четверти принадлежит точка с координатами (х,у)

function getQuarter(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Not a number";
  }
  var quarter = "";
  if (x > 0 && y > 0) {
    quarter = "Точка находится в четверти I";
  } else if (x < 0 && y > 0) {
    quarter = "Точка находится в четверти II";
  } else if (x < 0 && y < 0) {
    quarter = "Точка находится в четверти III";
  } else {
    quarter = "Точка находится в четверти IV";
  }
  return quarter;
}

// 3.	Найти суммы только положительных из трех чисел

function sumOfPositive(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "Not a number";
  }
  var result = 0;
  if (num1 > 0 && num2 > 0 && num3 > 0) {
    result = num1 + num2 + num3;
  } else {
    return "not a positive number";
  }
  return result;
}

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

function getMaxNumber(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "Not a number";
  }
  var result = 0;
  var sum1 = num1 * num2 * num3;
  var sum2 = num1 + num2 + num3;
  if (sum1 > sum2) {
    result = sum1 + 3;
  } else {
    result = sum2 + 3;
  }
  return result;
}

// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// 0-19	F
// 20-39 E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A

function getMark(rating) {
  if (typeof rating !== "number") {
    return "Not a number";
  }
  var result = "Your mark is ";
  switch (true) {
    case rating === 0 || rating <= 19:
      result += "F";
      break;
    case rating === 20 || rating <= 39:
      result += "E";
      break;
    case rating === 40 || rating <= 59:
      result += "D";
      break;
    case rating === 60 || rating <= 74:
      result += "C";
      break;
    case rating === 75 || rating <= 89:
      result += "B";
      break;
    case rating === 90 || rating <= 100:
      result += "A";
      break;
    default:
      result += "impossible :)";
      break;
  }
  return result;
}

module.exports = {
  sumOfNumbers,
  getQuarter,
  sumOfPositive,
  getMaxNumber,
  getMark,
};
