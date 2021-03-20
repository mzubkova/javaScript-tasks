// 1.	Найти минимальный элемент массива

function getLeastNumber(arrNumbers) {
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

function getBiggestNumber(arrNumbers) {
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
  var leastNumber = 0;
  for (var i = 0; i < arrNumbers.length; i++) {
    var currentNumber = arrNumbers[i];
    if (currentNumber < leastNumber) {
      leastNumber = currentNumber;
    }
  }
  return arrNumbers.indexOf(leastNumber);
}

// 4.	Найти индекс максимального элемента массива

function getIndexOfMax(arrNumbers) {
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

function sumOfOddIndex2(arrNumbers) {
  return arrNumbers.reduce(function (acc, el, i) {
    if (i % 2) return acc + el;
    return acc;
  }, 0);
}

// 6.	Сделать реверс массива (массив в обратном направлении)

function getReverseNumber(arr) {
  if (Array.isArray(arr)) {
    return arr.map(arr.pop, [].concat(arr));
  }
}

// 7.	Посчитать количество нечетных элементов массива

function getOddElements(arr) {
  var newArr = arr.filter(function (el, index) {
    if (index % 2) return el;
  });
  return newArr.length;
}

// 8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2

function getReverseArray(arr) {
  if (Array.isArray(arr) && !arr.length) {
    return "Array is an array and is empty";
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
