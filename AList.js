var IList = require("./IList");

var AList = function (capacity) {
  IList.call(this, capacity);
  this.size = 0;
  this.DEFAULT_CAPACITY = 10;
  this.array = (() => {
    if (!capacity) {
      return new Array(this.DEFAULT_CAPACITY);
    } else if (typeof capacity === "number") {
      return new Array(capacity);
    } else if (Array.isArray(capacity)) {
      this.size = capacity.length;
      return capacity;
    } else {
      throw new Error("only numbers or array arguments");
    }
  })();
};

AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.clear = function () {
  this.size = 0;
};
AList.prototype.getSize = function () {
  return this.size;
};
AList.prototype.add = function (value) {
  this.array = this.array.concat(value);
  this.size += 1;
};
AList.prototype.set = function (value, index) {
  if (index < 0 || index > this.array.length - 1) {
    throw new Error("This index is not exist");
  }
  if (!this.array[index]) {
    this.array[index] = value;
    this.size++;
  } else {
    this.array[index] = value;
  }
};

AList.prototype.get = function (index) {
  return this.array[index];
};

AList.prototype.remove = function (value) {
  let arr = [];
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] !== value) {
      arr.push(this.array[i]);
    } else this.size--;
  }
  this.array = arr;
};

AList.prototype.toArray = function () {
  let arr = [];
  arr.push(this.size);
  arr.push(this.DEFAULT_CAPACITY);
  arr.push(this.array);
  return arr;
};

AList.prototype.toString = function () {
  return this.array.toString();
};

AList.prototype.contains = function (value) {
  let result = false;
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] == value) {
      result = true;
    }
  }
  return result;
};

AList.prototype.minValue = function () {
  var minVal = this.array[0];
  for (var i = 0; i < this.array.length + 1; i++) {
    if (this.array[i] < minVal) {
      minVal = this.array[i];
    }
  }
  return minVal;
};

AList.prototype.maxValue = function () {
  var maxVal = this.array[0];

  for (var i = 0; i < this.array.length + 1; i++) {
    if (this.array[i] > maxVal) {
      maxVal = this.array[i];
    }
  }
  return maxVal;
};

AList.prototype.minIndex = function () {
  var minInd = 0;

  for (var i = 1; i < this.array.length + 1; i++) {
    if (this.array[minInd] > this.array[i]) {
      minInd = i;
    }
  }

  return minInd;
};

AList.prototype.maxIndex = function () {
  var maxInd = 0;

  for (var i = 1; i < this.array.length + 1; i++) {
    if (this.array[maxInd] < this.array[i]) {
      maxInd = i;
    }
  }

  return maxInd;
};

AList.prototype.reverse = function () {
  var newArr = [];
  for (var i = this.array.length - 1; i > -1; i--) {
    newArr.push(this.array[i]);
  }
  return (this.array = newArr);
};

AList.prototype.halfReverse = function () {
  var halfArr = Math.round(this.array.length / 2);
  var reversedHalf = [];
  for (var i = halfArr; i < this.array.length; i++) {
    reversedHalf.push(this.array[i]);
  }
  reversedHalf.push(this.array[halfArr - 1]);
  for (var j = 0; j < halfArr - 1; j++) {
    reversedHalf.push(this.array[j]);
  }

  return (this.array = reversedHalf);
};

AList.prototype.retainAll = function (array) {
  let resultArr = [];
  this.size = 0;
  for (let i = 0; i < this.array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (this.array[i] == array[j]) {
        resultArr.push(this.array[i]);
        this.size++;
      }
    }
  }
  return (this.array = resultArr);
};

AList.prototype.removeAll = function (array) {
  let resultArr = [];
  this.size = 0;

  for (let i = 0; i < this.array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (this.array[i] == array[j]) {
        delete this.array[i];
      }
    }
    if (this.array[i] !== undefined) {
      resultArr.push(this.array[i]);
      this.size++;
    }
  }
  return (this.array = resultArr);
};

AList.prototype.sort = function () {};

AList.prototype.print = function () {
  for (var i = 0; i < this.array.length; i++) {
    console.log(this.array[i]);
  }
};

var list = new AList([5, 1, 7, 15, 6, 0, 11, 3, 4]);
