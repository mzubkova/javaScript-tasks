var IList = require("./IList");

var LList = function (capacity) {
  IList.call(this, capacity);
  this.size = 0;
  this.root = null;
  this.Node = function (value) {
    this.value = value;
    this.next = null;
  };
};

LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.clear = function () {
  this.size = 0;
  this.root = null;
};

LList.prototype.getSize = function () {
  return this.size;
};

LList.prototype.add = function (value) {
  var newNode = new this.Node(value);
  this.size++;
  if (this.root == null) {
    this.root = newNode;
  } else {
    var tempNode = this.root;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
};

LList.prototype.set = function (value, index) {
  var tempNode = this.root;
  var counter = 0;
  while (tempNode !== null) {
    counter++;
    if (counter == index) {
      tempNode.next.value = value;
      tempNode.next = tempNode.next;
    }
    tempNode = tempNode.next;
  }
};

LList.prototype.get = function (index) {
  var tempNode = this.root;
  tempNode = tempNode.next;
  var counter = 0;
  while (tempNode !== null) {
    counter++;
    if (counter == index) {
      return tempNode.value;
    }
    tempNode = tempNode.next;
  }
};

LList.prototype.remove = function (value) {
  if (this.root === null) {
    return;
  }
  var tempNode = this.root;
  if (tempNode.value === value) {
    this.root = tempNode.next;
    this.size--;
  }
  while (tempNode.next !== null) {
    console.log(tempNode);
    if (tempNode.next.value === value) {
      this.size--;
      tempNode.next = tempNode.next.next;
    } else {
      tempNode = tempNode.next;
    }
  }
};
LList.prototype.toArray = function () {
  if (this.size === 0) {
    return new Array();
  }
  var array = new Array(this.size);
  var tempNode = this.root;
  var index = 0;
  while (tempNode !== null) {
    array[index++] = tempNode.value;
    tempNode = tempNode.next;
  }
  return array;
};

LList.prototype.toString = function () {
  var tempNode = this.root;
  var string = "";
  while (tempNode !== null) {
    if (tempNode != null) {
      string += tempNode.value + " ";
    }
    tempNode = tempNode.next;
  }
  return string;
};

LList.prototype.contains = function (value) {
  var tempNode = this.root;
  while (tempNode !== null) {
    if (tempNode.value == value) {
      return true;
    }
    tempNode = tempNode.next;
  }
  return false;
};

LList.prototype.minValue = function () {
  var tempNode = this.root;
  var minVal = tempNode.value;
  while (tempNode.next !== null) {
    if (tempNode.next.value < minVal) {
      minVal = tempNode.next.value;
    }
    tempNode = tempNode.next;
  }
  return minVal;
};

LList.prototype.maxValue = function () {
  var tempNode = this.root;
  var minVal = tempNode.value;
  while (tempNode.next !== null) {
    if (tempNode.next.value > minVal) {
      minVal = tempNode.next.value;
    }
    tempNode = tempNode.next;
  }
  return minVal;
};
LList.prototype.minIndex = function () {
  var tempNode = this.root;
  var minVal = tempNode.value;
  var counter = 0;
  var minInd = 0;
  while (tempNode.next !== null) {
    counter++;
    if (tempNode.next.value < minVal) {
      minVal = tempNode.next.value;
      minInd = counter;
    }
    tempNode = tempNode.next;
  }
  return minInd;
};

LList.prototype.maxIndex = function () {
  var tempNode = this.root;
  var maxVal = tempNode.value;
  var counter = 0;
  var maxInd = 0;
  while (tempNode.next !== null) {
    counter++;
    if (tempNode.next.value > maxVal) {
      maxVal = tempNode.next.value;
      maxInd = counter;
    }
    tempNode = tempNode.next;
  }
  return maxInd;
};

LList.prototype.reverse = function () {
  var newlist = new LList();

  var tempNode = this.root;
  var counter = this.size;
  var lessCounter = 0;
  for (let i = 0; i > this.size; i++) {
    while (tempNode !== null) {
      if (lessCounter == counter) {
        newlist.add(tempNode.next.value);
      }
      tempNode = tempNode.next;
      lessCounter++;
    }
    counter--;
  }
};
LList.prototype.halfReverse = function () {};
LList.prototype.retainAll = function (array) {};
LList.prototype.removeAll = function (array) {};
LList.prototype.sort = function () {};
LList.prototype.print = function () {};

var list = new LList();
