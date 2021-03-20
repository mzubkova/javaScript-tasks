// 1.	Получить строковое название дня недели по номеру дня.

var arrWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function nameOfDay() {
  var date = new Date();
  var number = date.getDay();
  return arrWeek[number];
}

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function distancePoints(x, y) {
  var res = Math.sqrt(Math.pow(y[0] - x[0], 2) + Math.pow(y[1] - x[1], 2));
  return +res.toFixed(2);
}

// 3.	Вводим число(0-999), получаем строку с прописью числа.

var arrUnits = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

var arrTens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

var arrTens2 = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

var arrHundreds = [
  "",
  "one hundred",
  "two hundred",
  "three hundred",
  "four hundred",
  "five hundred",
  "six hundred",
  "seven hundred",
  "eight hundred",
  "nine hundred",
];

function getStringFromNumbers(numberInput) {
  if (numberInput === 0) {
    return numberInput + " is zero";
  }

  while (
    numberInput == "" ||
    isNaN(numberInput) ||
    !Number.isInteger(numberInput) ||
    numberInput > 999
  ) {
    return "Incorrect number";
  }

  var str = "";
  var firstIndex = Math.floor(numberInput / 100);
  str = str + arrHundreds[firstIndex];
  var numberSlice = numberInput % 100;
  var secondIndex = Math.floor(numberSlice / 10);
  var lastIndex = Math.floor(numberSlice % 10);

  if (secondIndex > 1 && lastIndex !== 0) {
    str = numberInput + " is " + str + " " + arrTens2[secondIndex];
    str = str + " " + arrUnits[lastIndex];
  } else if (secondIndex === 0) {
    str = str + " " + arrTens2[secondIndex];
    str = str + " " + arrUnits[lastIndex];
  } else if (secondIndex > 1 && lastIndex === 0) {
    str = str + " " + arrTens2[secondIndex];
  } else if (secondIndex === 1) {
    str = str + " " + arrTens[lastIndex];
  } else {
    return "error";
  }
  return str;
}

// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
// 5.	Для задания 2 расширить диапазон до 999 миллиардов
// 6.	Для задания 3 расширить диапазон до 999 миллиардов
