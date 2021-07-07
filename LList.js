var arr = [1, 2, 3, 4, 5, 6, 7];
var IList = function (capacity) {
  this.capacity = capacity;
};
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
