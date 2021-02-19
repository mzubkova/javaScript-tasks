// 1.	Найти минимальный элемент массива

const arrNumbers = [1, 888, 10, 67, -17, 45];
const arrSome = ["Julie", "Tom", 1, 677.5, [5, 6, 7]];

function getLeastNumber() {
  let leastNumber = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    const currentNumber = arrNumbers[i];
    if (currentNumber < leastNumber) {
      leastNumber = currentNumber;
    }
  }
  return leastNumber;
}

// const getMinElement = (number) => Math.min(...number);

// 2.	Найти максимальный элемент массива

function getBiggestNumber() {
  let biggestNumber = 0;
  arrNumbers.forEach((currentNumber) => {
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  });
  return biggestNumber;
}

// const getMaxElement = (number) => Math.max(...number);

// 3.	Найти индекс минимального элемента массива

const getIndexOfMin = () => arrNumbers.indexOf(getLeastNumber());

// 4.	Найти индекс максимального элемента массива

const getIndexOfMax = () => arrNumbers.indexOf(getBiggestNumber());

// 5.	Посчитать сумму элементов массива с нечетными индексами

const sumOfOddIndex = () =>
  arrNumbers.reduce((acc, el, i) => {
    if (i % 2) return acc + el;
    return acc;
  }, 0);

// 6.	Сделать реверс массива (массив в обратном направлении)

const getReverseNumber = arrSome.map(arrSome.pop, [...arrSome]);

// const reverseArr = () => arrSome.reverse();

// 7.	Посчитать количество нечетных элементов массива

const oddElements = () => {
  const newArr = arrSome.filter((el, index) => {
    if (index % 2) return el;
  });
  return newArr.length;
};
