// 1.	Если а – четное посчитать а*б, иначе а+б

function sumOfNumbers(a, b) {
  let sum = 0;
  a % 2 === 0 ? (sum = a * b) : (sum = a + b);
  return sum;
}

// 2.	Определить какой четверти принадлежит точка с координатами (х,у)

function getQuarter(x, y) {
  let quarter = "";
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
  let res = 0;
  if (num1 > 0 && num2 > 0 && num3 > 0) {
    res = num1 + num2 + num3;
  } else {
    console.log("not a positive number");
  }
  return res;
}

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

const getMaxNumber = (a, b, c) => Math.max(a * b * c, a + b + c) + 3;

// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// 0-19	F
// 20-39 E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A

function getMark(rating) {
  rating = prompt("Enter your rating");
  switch (true) {
    case rating === 0 || rating <= 19:
      alert("Your mark is F");
      break;
    case rating === 20 || rating <= 39:
      alert("Your mark is E");
      break;
    case rating === 40 || rating <= 59:
      alert("Your mark is D");
      break;
    case rating === 60 || rating <= 74:
      alert("Your mark is C");
      break;
    case rating === 75 || rating <= 89:
      alert("Your mark is B");
      break;
    case rating === 90 || rating <= 100:
      alert("Your mark is A");
      break;
    default:
      alert("Impossible :) ");
      break;
  }
}
