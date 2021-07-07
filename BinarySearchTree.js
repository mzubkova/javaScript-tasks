var ITree = require("./ITree");

var BinarySearchTree = function () {
    ITree.call(this);
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };

    this.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    };

    //Прямой обход
    this.inOrderTraverse = function (node, callback) {
        if (node) {
            this.inOrderTraverse(node.left, callback);
            callback(node.value);
            this.inOrderTraverse(node.right, callback);
        }
    };

    //Симметричный или поперечный обход
    this.preOrderTraverse = function (node, callback) {
        if (node) {
            callback(node.value);
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
        }
    };

    // Обход в обратном порядке
    this.postOrderTraverse = function (node, callback) {
        if (node) {
            this.postOrderTraverse(node.left, callback);
            this.postOrderTraverse(node.right, callback);
            callback(node.value);
        }
    };

    this.getSize = function (node) {
        if (!node) {
            return 0;
        }
        var ret = 1;
        ret += this.getSize(node.left);
        ret += this.getSize(node.right);
        return ret;
    };

    this.nodeToArray = function (node, array) {
        if (!node) {
            return array;
        }
        array = this.nodeToArray(node.left, array);
        array.push(node.value);
        array = this.nodeToArray(node.right, array);
        return array;
    };

    this.searchNode = function (node, value) {
        if (!node) {
            return null;
        } else if (value < node.value) {
            console.log(value);
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            console.log(value);
            return this.searchNode(node.right, value);
        } else {
            return node;
        }
    };

    this.getWidth = function (node, level) {
        if (!node) {
            return 0;
        }
        if (level === 1) {
            return 1;
        }
        if (level > 1) {
            return this.getWidth(node.left, level - 1) + this.getWidth(node.right, level - 1);
        }
        return 0;
    };

    this.getHeight = function (node) {
        if (!node) {
            return 0;
        }
        var leftHeight = this.getHeight(node.left);
        var rightHeight = this.getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    };

    this.getNodes = function (node) {
        var ret = 0;
        if (node !== null) {
            ret += this.getNodes(node.left);
            if (node.left != null || node.right != null) {
                ret += 1;
            }
            ret += this.getNodes(node.right);
        }
        return ret;
    };

    this.removeNode = function (cur, par, val) {
        if (!cur) {
            return;
        }
        if (val < cur.value) {
            this.removeNode(cur.left, cur, val);
        } else if (val > cur.value) {
            this.removeNode(cur.right, cur, val);
        } else {
            if (!cur.left && !cur.right) {
                if (cur === this.root) {
                    this.root = null;
                } else if (cur === par.left) {
                    par.left = null;
                } else {
                    par.right = null;
                }
            } else if (cur.right === null) {
                if (cur === this.root) {
                    this.root = cur.left;
                } else if (par.left === cur) {
                    par.left = cur.left;
                } else {
                    par.right = cur.left;
                }
            } else if (cur.left == null) {
                if (cur === this.root) {
                    this.root = cur.right;
                } else if (par.left === cur) {
                    par.left = cur.right;
                } else {
                    par.right = cur.right;
                }
            } else {
                var tempNode = cur.left;
                while (tempNode.right != null) {
                    tempNode = tempNode.right;
                }
                if (cur === this.root) {
                    tempNode.right = this.root.right;
                    this.root = this.root.left;
                } else {
                    tempNode.right = cur.right;
                    if (cur === par.left) {
                        par.left = cur.left;
                    } else {
                        par.right = cur.left;
                    }
                }
            }
        }
    };

    this.getLeaves = function (node) {
        if (node == null) {
            return 0;
        }
        var ret = 0;
        ret += this.getLeaves(node.left);
        if (node.left == null && node.right == null) {
            ret += 1;
        }
        ret += this.getLeaves(node.right);
        return ret;
    };

    this.nodeReverse = function (node) {
        if (!node) {
            return;
        }
        var tmpNode = node.left;
        node.left = node.right;
        node.right = tmpNode;
        this.nodeReverse(node.left);
        this.nodeReverse(node.right);
    };

    this.getMinNode = function (node) {
        if (!node) {
            return 0;
        }
        if (node.left) {
            return this.getMinNode(node.left)
        }
        return node.value;
    };

    this.getMaxNode = function (node) {
        if (!node) {
            return 0;
        }
        if (node.right) {
            return this.getMaxNode(node.right)
        }
        return node.value;
    }
};

BinarySearchTree.prototype = Object.create(ITree.prototype);
BinarySearchTree.prototype.constructor = BinarySearchTree;

BinarySearchTree.prototype.insert = function (value) {
    var newNode = new this.Node(value);
    if (!this.root) {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode);
    }
};

BinarySearchTree.prototype.print = function (type, callback) {
    switch (type) {
        case "pre":
            this.preOrderTraverse(this.root, callback);
            break;
        case "post":
            this.postOrderTraverse(this.root, callback);
            break;
        default:
            this.inOrderTraverse(this.root, callback);
            break;
    }
};

BinarySearchTree.prototype.clear = function () {
    this.root = null;
};

BinarySearchTree.prototype.size = function () {
    return this.getSize(this.root);
};

BinarySearchTree.prototype.toArray = function () {
    var ar = [];
    ar = this.nodeToArray(this.root, ar);
    return ar;
};

BinarySearchTree.prototype.init = function (array) {
    if (!array) {
        array = new Array(0);
    }
    this.clear();
    for (var i = 0; i < array.length; i++) {
        this.insert(array[i]);
    }
};

BinarySearchTree.prototype.search = function (value) {
    return this.searchNode(this.root, value);
};

BinarySearchTree.prototype.width = function () {
    var maxWidth = 0;
    var width = 0;
    var height = this.height();

    for (var i = 1; i <= height; i++) {
        width = this.getWidth(this.root, i);
        if (width > maxWidth) {
            maxWidth = width;
        }
    }

    return maxWidth;
};

BinarySearchTree.prototype.height = function () {
    return this.getHeight(this.root);
};

BinarySearchTree.prototype.nodes = function () {
    return this.getNodes(this.root);
};

BinarySearchTree.prototype.leaves = function () {
    return this.getLeaves(this.root);
};

BinarySearchTree.prototype.reverse = function () {
    return this.nodeReverse(this.root);
};

BinarySearchTree.prototype.remove = function (value) {
    this.removeNode(this.root, this.root, value);
};

BinarySearchTree.prototype.minNode = function () {
    return this.getMinNode(this.root);
};

BinarySearchTree.prototype.maxNode = function () {
    return this.getMaxNode(this.root);
};

module.exports = BinarySearchTree;