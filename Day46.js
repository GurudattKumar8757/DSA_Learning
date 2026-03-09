//199. Binary Tree Right Side View - Iterative Solution

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
var rightSideView = function (root) {
    if (!root)
        return [];
    let q = [root];
    let ans = [];
    while (q.length) {
        let levelArray = [];
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArray.push(curr.val);
        }
        ans.push(levelArray[levelSize - 1]);
    }

    return ans;
};

//199. Binary Tree Right Side View - Recursive Solution
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
var rightSideView = function (root) {
    if (!root)
        return [];
    let ans = [];

    function traverse(curr, level) {
        if (!ans[level])
            ans[level] = [];

        ans[level].push(curr.val)
        curr.left && traverse(curr.left, level + 1);
        curr.right && traverse(curr.right, level + 1);
    }
    traverse(root, 0);
    let rightView = [];
    for (let i = 0; i < ans.length; i++) {
        let n = ans[i].length;
        rightView.push(ans[i][n - 1]);
    }
    return rightView;
};