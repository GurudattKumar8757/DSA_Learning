//102. Binary Tree Level Order Traversal - Iterative Solution
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root)
        return [];
    let level = 0;
    let q = [root];
    let ans = [];
    while (q.length) {
        let levelArr = [];
        levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }

    return ans;
};


//102. Binary Tree Level Order Traversal - Recursive Solution
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = [];

    function traversal(curr, level) {
        if (!curr)
            return;

        if (!ans[level]) {
            ans[level] = [];
        }
        ans[level].push(curr.val);
        traversal(curr.left, level + 1);
        traversal(curr.right, level + 1);
    }

    traversal(root, 0);
    return ans;
};