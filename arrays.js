// 1.	Найти минимальный элемент массива

function getLeastNumber(arrNumbers) {
  if (!Array.isArray(arrNumbers)) {
    return "Not an array";
  }
  var leastNumber = arrNumbers[0];
  for (var i = 1; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber < leastNumber) {
      leastNumber = currentNumber;
    }
  }
  return leastNumber;
}

// 2.	Найти максимальный элемент массива

function getBiggestNumber(arrNumbers) {
  if (!Array.isArray(arrNumbers)) {
    return "Not an array";
  }
  var biggestNumber = 0;
  for (var i = 0; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
  return biggestNumber;
}

// 3.	Найти индекс минимального элемента массива

function getIndexOfMin(arrNumbers) {
  if (!Array.isArray(arrNumbers)) {
    return "Not an array";
  }
  var leastNumber = arrNumbers[0];
  for (var i = 0; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber < leastNumber) {
      leastNumber = currentNumber;
      console.log(leastNumber);
    }
  }
  return arrNumbers.indexOf(leastNumber);
}

// 4.	Найти индекс максимального элемента массива

function getIndexOfMax(arrNumbers) {
  if (!Array.isArray(arrNumbers)) {
    return "Not an array";
  }
  var biggestNumber = 0;
  for (var i = 0; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
  return arrNumbers.indexOf(biggestNumber);
}

// 5.	Посчитать сумму элементов массива с нечетными индексами

function sumOfOddIndex(arrNumbers) {
  if (!Array.isArray(arrNumbers)) {
    return "Not an array";
  }
  var sum = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    var digit = arrNumbers[i];
    if (i > 0 && i % 2 !== 0) sum += digit;
  }
  return sum;
}

// 6.	Сделать реверс массива (массив в обратном направлении)

function getReverseNumber(arrNumbers) {
  if (!Array.isArray(arrNumbers)) {
    return "Not an array";
  }
  var newArr = [];
  if (Array.isArray(arrNumbers)) {
    for (let index = arrNumbers.length - 1; index >= 0; index--) {
      var element = arrNumbers[index];
      newArr.push(element);
    }
    return newArr;
  }
}

// 7.	Посчитать количество нечетных элементов массива

function getOddElements(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    var digit = arr[i];
    if (digit > 0 && digit % 2 !== 0) sum += digit;
  }
  return sum;
}

// 8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2

function getReverseArray(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  var newArray = [];
  var halfArr = arr.length / 2;

  if (arr.length % 2 === 0) {
    return (newArray = arr.slice(halfArr).concat(arr.slice(0, halfArr)));
  } else {
    return (newArray = arr
      .slice(-2)
      .concat(arr.slice(0, halfArr))
      .concat(arr[2]));
  }
}

// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temporary = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporary;
      }
    }
  }

  return arr;
}

function selectSort(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  for (var i = 0; i < arr.length - 1; i++) {
    var indexMin = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      var _ref = [arr[indexMin], arr[i]];
      arr[i] = _ref[0];
      arr[indexMin] = _ref[1];
    }
  }
  return arr;
}

function insertSort(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];
    var j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}

// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)

module.exports = {
  getLeastNumber,
  getBiggestNumber,
  getIndexOfMin,
  getIndexOfMax,
  sumOfOddIndex,
  getReverseNumber,
  getOddElements,
  getReverseArray,
  bubbleSort,
  selectSort,
  insertSort,
};
