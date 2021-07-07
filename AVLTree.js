class AVLTree {
    constructor() {
        this.root = null;
    }

    getBalanceFactor(root) {
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    getHeight(root) {
        let height = 0;
        if (root === null || typeof root === "undefined") {
            height = -1;
        } else {
            height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }
        return height;
    }

    insert(data) {
        let node = new this.Node(data);
        if (this.root === null) {
            // Insert as the first element this.root = node;
        } else {
            insertHelper(this, this.root, node);
        }
    }

    inOrder() {
        inOrderHelper(this.root);
    }
}

AVLTree.prototype.Node = class {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

function insertHelper(self, root, node) {
    if (root === null) {
        root = node;
    } else if (node.data < root.data) {
        root.left = insertHelper(self, root.left, node);
        if (root.left !== null && self.getBalanceFactor(root) > 1) {
            if (node.data > root.left.data) {
                root = rotationLL(root);
            } else {
                root = rotationLR(root);
            }
        }
    } else if (node.data > root.data) {
        root.right = insertHelper(self, root.right, node);
        if (root.right !== null && self.getBalanceFactor(root) < -1) {
            if (node.data > root.right.data) {
                root = rotationRR(root);
            } else {
                root = rotationRL(root);
            }
        }
    }
    return root;
}

function inOrderHelper(root) {
    if (root !== null) {
        inOrderHelper(root.left);
        console.log(root.data);
        inOrderHelper(root.right);
    }
}

function rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
}

function rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
}

function rotationLR(node) {
    node.left = rotationRR(node.left);
    return rotationLL(node);
}

function rotationRL(node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
}