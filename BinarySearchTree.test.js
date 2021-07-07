var BinarySearchTree = require("./BinarySearchTree");

describe("BinarySearchTree", function () {
    var BSTree = new BinarySearchTree();

    it("insert", function() {
        BSTree.init([11,7,9,5,25,55,30,-5,10,65]);
        console.log(BSTree.width());
        console.log(BSTree.height());
        console.log(BSTree.nodes());
        console.log(BSTree.leaves());
        console.log(BSTree.size());
        console.log(BSTree.minNode());
        console.log(BSTree.maxNode());
    })
});