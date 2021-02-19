// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumOfEvenNumbers(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    i % 2 === 0 ? (sum += i) : false;
  }
  return sum;
}

// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

const simpleNumber = (number) => {
  for (let i = 0; i < number; i++) if (number % i === 0) return false;
  return number > 1;
};

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)



// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function getFactorial(n) {
  let total = 1;
  for (i = 0; i < n; i++) {
    total = total * (n - i);
  }
  return total;
}

// 5.	Посчитать сумму цифр заданного числа

function sumOfDigits(n) {
  let total = 0;

  while (n > 0) {
    total += n % 10;
    n = Math.floor(n / 10);
  }

  return total;
}

// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

const getReverseNumber = (n) => {
  result = 0;

  while (n) {
    result *= 10;
    result += n % 10;

    n = Math.floor(n / 10);
  }
  return result;
};

// function digitize(n) {
//   n = String(n).split("").reverse().map(Number);
//   return n;
// }
