var arr = [1, 2, 3, 4, 5, 6, 7];
var IList = function (capacity) {
  this.capacity = capacity;
};
var ArrayList = function (capacity) {
  IList.call(this, capacity);
  this.size = 0;
  this.index = 0;
  this.DEFAULT_CAPACITY = 10;

  if (!this.capacity) {
    this.array = new Array();
    this.capacity = this.DEFAULT_CAPACITY;
  } else if (typeof this.capacity === "number") {
    this.array = new Array(this.capacity);
  } else if (Array.isArray(this.capacity)) {
    this.index = this.capacity.length - 1;
    this.size = this.capacity.length;
    this.array = this.capacity;
  } else {
    throw new Error("Failed to create ArrayList");
  }
  this.ensureCapacity = function () {
    var newArray = new Array(this.array.length * 2);
    for (var i = 0; i < this.array.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  };
  this.addValue = function (value) {
    this.array[this.index++] = value;
    this.size++;
  };
};
ArrayList.prototype = Object.create(IList.prototype);
ArrayList.prototype.constructor = ArrayList;

ArrayList.prototype.clear = function () {
  this.array = [];
  this.size = 0;
  this.index = 0;
};
ArrayList.prototype.getSize = function () {
  return this.size;
};
ArrayList.prototype.add = function (value) {
  var numb = Number(value);
  if (this.size === this.array.length) {
    this.ensureCapacity();
    this.addValue(value);
  } else {
    if (this.array[this.index]) {
      this.index++;
      this.add(value);
    } else {
      this.addValue(value);
    }
  }
};
ArrayList.prototype.set = function (value, index) {
  value = Number(value);
  index = Number(index);
  if (index < 0 || index > this.array.length - 1) {
    throw new Error("Index is not in the boundaries");
  }
  if (this.array[index] === undefined) {
    this.array[index] = value;
    this.size++;
  } else {
    this.array[index] = value;
  }
};
ArrayList.prototype.get = function (index) {
  index = Number(index);
  if (index < 0 || index > this.array.length - 1) {
    throw new Error("Index is not in the boundaries");
  }
  for (var i = 0; i < this.array.length; i++) {
    return this.array[index];
  }
};
ArrayList.prototype.remove = function (index) {
  index = Number(index);
  if (index < 0 || index > this.array.length - 1) {
    throw new Error("Index is not in the boundaries");
  } else {
    var temp = this.array[index];
    this.array[index] = undefined;
    this.size--;
    return temp;
  }
};
ArrayList.prototype.toArray = function () {
  return this.array;
};
ArrayList.prototype.toString = function () {
  return this.array.toString();
};
ArrayList.prototype.contains = function (value) {
  value = Number(value);
  for (var i = 0; i < this.array.length; i++) {
    if (value === this.array[i]) {
      return true;
    }
  }
  return false;
};
ArrayList.prototype.minValue = function () {
  var tempMin = this.array[0];
  for (var i = 1; i < this.array.length; i++) {
    if (this.array[i] < tempMin) {
      tempMin = this.array[i];
    }
  }
  return tempMin;
};
ArrayList.prototype.maxValue = function () {
  var tempMax = this.array[0];
  for (var i = 1; i < this.array.length; i++) {
    if (this.array[i] > tempMax) {
      tempMax = this.array[i];
    }
  }
  return tempMax;
};
ArrayList.prototype.minIndex = function () {
  var tempMinIndex = this.array[0];
  var minIndex;
  for (var i = 1; i < this.array.length; i++) {
    if (this.array[i] <= tempMinIndex) {
      tempMinIndex = this.array[i];
      minIndex = i;
    }
  }
  return minIndex;
};
ArrayList.prototype.maxIndex = function () {
  var tempMaxIndex = this.array[0];
  var maxIndex;
  for (var i = 1; i < this.array.length; i++) {
    if (this.array[i] >= tempMaxIndex) {
      tempMaxIndex = this.array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};
ArrayList.prototype.reverse = function () {
  var temp = "";
  for (var i = 0; i < this.array.length / 2; i++) {
    temp = this.array[i];
    this.array[i] = this.array[this.array.length - 1 - i];
    this.array[this.array.length - 1 - i] = temp;
  }
  return this.array;
};
ArrayList.prototype.halfReverse = function () {
  for (var i = 0; i < Math.floor(this.array.length / 2); i++) {
    var secondIndex = Math.ceil(this.array.length / 2) + i;
    var tempElement = this.array[i];
    this.array[i] = this.array[secondIndex];
    this.array[secondIndex] = tempElement;
  }
  return this.array;
};
ArrayList.prototype.removeAll = function (value) {
  if (Array.isArray(value)) {
    for (var i = 0; i < this.array.length; i++) {
      for (var j = 0; j < value.length; j++) {
        if (this.array[i] === value[j]) {
          this.array[i] = undefined;
          this.size--;
        }
      }
    }
    return this.array;
  } else {
    throw new Error("Argument is not an array");
  }
};
ArrayList.prototype.retainAll = function (value) {
  if (Array.isArray(value)) {
    for (var i = 0; i < this.array.length; i++) {
      var contains = false;
      for (var j = 0; j < value.length; j++) {
        if (this.array[i] === value[j]) {
          contains = true;
          break;
        }
      }
      if (!contains) {
        this.array[i] = undefined;
        this.size--;
      }
    }
    return this.array;
  }
};
ArrayList.prototype.sort = function () {
  return this.array.sort();
};
ArrayList.prototype.print = function () {
  for (var i = 0; i < this.array.length; i++) {
    console.log(this.array[i]);
  }
};

console.log("-------------- Linked List ----------------");

var LinkedList = function () {
  this.size = 0;
  this.root = null;
  this.Node = function (value) {
    this.value = value;
    this.next = null;
  };
};
LinkedList.prototype = Object.create(IList.prototype);
LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.clear = function () {
  this.size = 0;
  this.root = null;
};
LinkedList.prototype.getSize = function () {
  return this.size;
};
LinkedList.prototype.add = function (value) {
  var newNode = new this.Node(value);
  this.size++;
  if (this.root === null) {
    this.root = newNode;
  } else {
    var tempNode = this.root;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
};
LinkedList.prototype.remove = function (value) {
  if (this.root === null) {
    return;
  }
  var tempNode = this.root;
  if (tempNode.value === value) {
    var removeValue = tempNode.value;
    this.root = tempNode.next;
    this.size--;
    return removeValue;
  }
  while (tempNode.next !== null) {
    if (tempNode.next.value === value) {
      var removedNode = tempNode.next;
      tempNode.next = tempNode.next.next;
      this.size--;
      return removedNode.value;
    } else {
      tempNode = tempNode.next;
    }
  }
};
LinkedList.prototype.toArray = function () {
  var array = new Array(this.size);
  var index = 0;
  var tempNode = this.root;
  while (tempNode !== null) {
    array[index++] = tempNode.value;
    tempNode = tempNode.next;
  }
  return array;
};
LinkedList.prototype.get = function (value) {
  var tempNode = this.root;
  var index = -1;
  while (tempNode) {
    index++;
    if (tempNode.value === value) {
      return index;
    }
    tempNode = tempNode.next;
  }
  return -1;
};
LinkedList.prototype.set = function (value, index) {
  var newNode = new this.Node(value);
  var tempNode = this.root;
  var previousNode;
  var currentIndex = 0;
  if (index > this.size) {
    return false;
  }
  if (index === 0) {
    newNode.next = tempNode;
    this.root = newNode;
  } else {
    while (currentIndex < index) {
      currentIndex++;
      previousNode = tempNode;
      tempNode = tempNode.next;
    }
    newNode.next = tempNode;
    previousNode.next = newNode;
  }
  this.size++;
};
LinkedList.prototype.contains = function (value) {
  var tempNode = this.root;
  while (tempNode.next !== null) {
    if (tempNode.value === value) {
      return true;
    }
    tempNode = tempNode.next;
  }
  return false;
};
LinkedList.prototype.minValue = function () {
  var tempNode = this.root;
  var tempMin = tempNode.value;
  for (var i = 0; i < this.size; i++) {
    if (tempNode.value < tempMin) {
      tempMin = tempNode.value;
    }
    tempNode = tempNode.next;
  }
  return tempMin;
};
LinkedList.prototype.maxValue = function () {
  var tempNode = this.root;
  var tempMax = tempNode.value;
  for (var i = 0; i < this.size; i++) {
    if (tempNode.value > tempMax) {
      tempMax = tempNode.value;
    }
    tempNode = tempNode.next;
  }
  return tempMax;
};
LinkedList.prototype.minIndex = function () {
  var tempNode = this.root;
  var tempMin = tempNode.value;
  var currentIndex;
  for (var i = 0; i < this.size; i++) {
    if (tempNode.value < tempMin) {
      tempMin = tempNode.value;
      currentIndex = i;
    }
    tempNode = tempNode.next;
  }
  return currentIndex;
};
LinkedList.prototype.maxIndex = function () {
  var tempNode = this.root;
  var tempMax = tempNode.value;
  var currentIndex;
  for (var i = 0; i < this.size; i++) {
    if (tempNode.value > tempMax) {
      tempMax = tempNode.value;
      currentIndex = i;
    }
    tempNode = tempNode.next;
  }
  return currentIndex;
};
LinkedList.prototype.print = function () {
  var tempNode = this.root;
  for (var i = 0; i < this.size; i++) {
    console.log(tempNode.value);
    tempNode = tempNode.next;
  }
};
LinkedList.prototype.reverse = function () {
  if (this.root === null) {
    return;
  }
  this.root = this.__reverseList(this.root);
};
LinkedList.prototype.toString = function () {
  if (this.size === 0) {
    return "";
  }
  var string = "";
  var tempNode = this.root;
  while (tempNode !== null) {
    string += tempNode.value;
    if (tempNode.next === null) {
      break;
    }
    string += ",";
    tempNode = tempNode.next;
  }
  return string;
};
LinkedList.prototype.removeAll = function (array) {
  if (array.length < 1 || !Array.isArray(array)) {
    return;
  }
  for (var i = 0; i < array.length; i++) {
    if (!this.contains(array[i]) || array[i] === undefined) {
      continue;
    }
    var tempNode = this.root;
    while (tempNode !== null) {
      if (tempNode.value === array[i]) {
        this.remove(array[i]);
      }
      tempNode = tempNode.next;
    }
  }
};
LinkedList.prototype.retainAll = function (array) {
  var size = this.size;
  var tempArray = [];
  for (var i = 0; i < size; i++) {
    var tempNode = this.root;
    while (tempNode !== null) {
      if (tempNode.value !== array[i]) {
        tempArray.push(tempNode.value);
      }
      tempNode = tempNode.next;
    }
  }
  for (var j = 0; j < tempArray.length; j++) {
    for (var k = 0; k < array.length; k++) {
      if (array[k] === tempArray[j]) {
        tempArray[j] = undefined;
      }
    }
  }
  this.removeAll(tempArray);
};

module.exports = { ArrayList, LinkedList };
