// 1.	Найти минимальный элемент массива

var arrNumbers = [1, 888, 10, 67, -17, 45];
var arrSome = ["Julie", "Tom", 1, 677.5, [5, 6, 7]];

function getLeastNumber() {
  var leastNumber = 0;
  for (var i = 0; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber < leastNumber) {
      leastNumber = currentNumber;
    }
  }
  return leastNumber;
}

// 2.	Найти максимальный элемент массива

function getBiggestNumber() {
  var biggestNumber = 0;
  for (var i = 0; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
  return biggestNumber;
}

// function getBiggestNumber() {
//   var biggestNumber = 0;
//   arrNumbers.forEach((currentNumber) => {
//     if (currentNumber > biggestNumber) {
//       biggestNumber = currentNumber;
//     }
//   });
//   return biggestNumber;
// }

// 3.	Найти индекс минимального элемента массива

function getIndexOfMin() {
  return arrNumbers.indexOf(getLeastNumber());
}

// 4.	Найти индекс максимального элемента массива

function getIndexOfMax() {
  return arrNumbers.indexOf(getBiggestNumber());
}

// 5.	Посчитать сумму элементов массива с нечетными индексами

function sumOfOddIndex2() {
  return arrNumbers.reduce(function (acc, el, i) {
    if (i % 2) return acc + el;
    return acc;
  }, 0);
}

// 6.	Сделать реверс массива (массив в обратном направлении)

function getReverseNumber() {
  if (Array.isArray(arrSome)) {
    return arrSome.map(arrSome.pop, [].concat(arrSome));
  }
}

// 7.	Посчитать количество нечетных элементов массива

function oddElements() {
  var newArr = arrSome.filter(function (el, index) {
    if (index % 2) return el;
  });
  return newArr.length;
}

// 8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2

var arrNumb = [1, 2, 3, 4];

function getMixOfArray() {
  var newArray = [];
  return (newArray = arrNumb.slice(-2).concat(arrNumb.slice(0, 2)));
}

// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

function bubbleSort(arr) {
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
