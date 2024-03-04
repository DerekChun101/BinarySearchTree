class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;

    }
}

class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        let sorted = [...new Set(arr)].sort();
        
        if(sorted.length === 0) {
            return null;
        }
       
        let mid = parseInt(sorted.length/2);

        let root = new Node(arr[mid]);
        root.left = this.buildTree(sorted.slice(0,mid));
        root.right = this.buildTree(sorted.slice(mid + 1));

        return root;
    }

    insert(value, root = this.root) {
        if(root === null) {
            return new Node(value);
        }
        root.data < value
            ? (root.right = this.insert(value, root.right))
            : (root.left = this.insert(value, root.left));
        return root;
    }

    deleteItem(value, root = this.root) {
        if(root === null) {
            return root;
        } 

        if(value < root.data) {
            root.left = this.deleteItem(value, root.left);
            return root;
        } else if(value > root.data) {
            root.right = this.deleteItem(value, root.right);
            return root;
        }
        
    }

    find(value) {

    }
}


let tree = new Tree([1,2,3,4,5]);



const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
