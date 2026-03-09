//1448. Count Good Nodes in Binary Tree
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
 * @return {number}
 */
var goodNodes = function (root) {
    let count = 0;

    function traverse(curr, maxSeenSoFar) {
        if (!curr)
            return;

        if (curr.val >= maxSeenSoFar) {
            ++count;
        }
        maxSeenSoFar = Math.max(maxSeenSoFar, curr.val);
        traverse(curr.left, maxSeenSoFar);
        traverse(curr.right, maxSeenSoFar);
    }
    traverse(root, -Infinity);
    return count;
};

//116. Populating Next Right Pointers in Each Node
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root)
        return root;

    function traverse(curr) {
        if (curr.left) {
            curr.left.next = curr.right;
        }
        if (curr.right && curr.next) {
            curr.right.next = curr.next.left;
        }
        curr.left && traverse(curr.left);
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return root;
};

//124. Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = -Infinity;

    function traverse(curr) {
        if (!curr)
            return 0;

        let leftSum = Math.max(0, traverse(curr.left));
        let rightSum = Math.max(0, traverse(curr.right));

        let currSum = leftSum + rightSum + curr.val;
        maxSum = Math.max(currSum, maxSum);
        return curr.val + Math.max(leftSum, rightSum);
    }
    traverse(root);

    return maxSum;
};