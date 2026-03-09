//145. Binary Tree Postorder Traversal - Iterative solution using two stack.
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
    if (!root)
        return [];
    let ans = [];
    let s1 = [root];
    let s2 = [];
    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }
    while (s2.length) {
        ans.push(s2.pop().val);
    }

    return ans;
};
//145. Binary Tree Postorder Traversal - Iterative solution using One stack.
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
    let ans = [];
    let stack = [];
    let curr = root;
    let lastVisited = null;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        let peekNode = stack[stack.length - 1];
        if (peekNode.right && peekNode.right != lastVisited) {
            curr = peekNode.right;
        } else {
            ans.push(peekNode.val);
            lastVisited = stack.pop();
        }
    }

    return ans;
};

//94. Binary Tree Inorder Traversal - Iterative solution using one stack
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
var inorderTraversal = function (root) {
    let number = [];
    let stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        number.push(curr.val);
        curr = curr.right;
    }

    return number;
};

//144. Binary Tree Preorder Traversal - Iterative solution using one stack

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
    if (!root)
        return [];
    let stack = [root];
    let ans = [];
    while (stack.length) {
        let curr = stack.pop();
        ans.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }

    return ans;
};