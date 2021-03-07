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

// 8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2

const arrNumb = [1, 2, 3, 4];
const getMixOfArray = () => {
  let newArray = [];
  return (newArray = arrNumb.slice(-2).concat(arrNumb.slice(0, 2)));
};

// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temporary = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporary;
      }
    }
  }

  return arr;
};

const selectSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
};

// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)
