//144. Binary Tree Preorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let number = [];

    function traversal(curr) {
        if (!curr)
            return;
        number.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);

    return number;
};

//145. Binary Tree Postorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let number = [];

    function traversal(curr) {
        if (!curr)
            return;

        traversal(curr.left);
        traversal(curr.right);
        number.push(curr.val);
    }
    traversal(root);
    return number;
};

//94. Binary Tree Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
     let number = [];

    function traversal(curr) {
        if (!curr)
            return;
        traversal(curr.left);
        number.push(curr.val);
        traversal(curr.right);
    }

    traversal(root);

    return number;
};