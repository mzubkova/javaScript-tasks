// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumOfEvenNumbers(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    return "Not a number";
  }
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum = i % 2 === 0 ? (sum += i) : sum;
  }
  return sum;
}

// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkSimpleNumber(number) {
  if (typeof number !== "number") {
    return "Not a number";
  }
  for (var i = 2; i < number; i++) if (number % i === 0) return false;
  return true;
}

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function getSqrtOfNumber(number) {
  if (typeof number !== "number") {
    return "Not a number";
  }
  for (var i = 1; ; i++) {
    var sqrt = i * i;
    if (number == sqrt) {
      return i;
    } else if (number < sqrt) {
      return i - 1;
    }
  }
}

function binarySearch(number) {
  if (typeof number !== "number") {
    return "Not a number";
  }
  var minValue = 1;
  var maxValue = number;
  var prevState = 0;
  while (true) {
    var middleValue = Math.floor((minValue + maxValue) / 2);
    if (prevState === middleValue) return middleValue;
    var middleValueSum = middleValue * middleValue;
    if (number === middleValueSum) return middleValue;
    if (number < middleValueSum) maxValue = middleValue;
    else minValue = middleValue;
    prevState = middleValue;
  }
}

// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function getFactorial(n) {
  if (typeof n !== "number") {
    return "Not a number";
  }
  var total = 1;
  for (var i = 0; i < n; i++) {
    total = total * (n - i);
  }
  return total;
}

// 5.	Посчитать сумму цифр заданного числа

function sumOfDigits(n) {
  var total = 0;

  if (typeof n !== "number") {
    return "Not a number";
  }

  while (n > 0) {
    total += n % 10;
    n = Math.floor(n / 10);
  }

  return total;
}

// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function getReverseNumber(n) {
  result = 0;

  if (typeof n !== "number") {
    return "Not a number";
  }

  while (n) {
    result *= 10;
    result += n % 10;

    n = Math.floor(n / 10);
  }
  return result;
}

module.exports = {
  sumOfEvenNumbers,
  checkSimpleNumber,
  getSqrtOfNumber,
  binarySearch,
  getFactorial,
  sumOfDigits,
  getReverseNumber,
};
