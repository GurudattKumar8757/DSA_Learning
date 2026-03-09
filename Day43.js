//100. Same Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q)
        return true;

    if (!p || !q)
        return false;

    return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    function traverse(curr) {
        if (!curr)
            return 0;

        let leftDepth = traverse(curr.left);
        let rightDepth = traverse(curr.right);

        let currDiameter = leftDepth + rightDepth;
        diameter = Math.max(diameter, currDiameter);
        return 1 + Math.max(leftDepth, rightDepth);
    }

    traverse(root);
    return diameter;
};

//103. Binary Tree Zigzag Level Order Traversal - Iterative Approach
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
var zigzagLevelOrder = function (root) {
    if (!root)
        return [];
    let ans = [];
    let q = [root];
    let level = 0;

    while (q.length) {
        let levelArray = [];
        let levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            level % 2 != 0 ? levelArray.unshift(curr.val) : levelArray.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ++level;
        ans.push(levelArray);
    }

    return ans;
};

//103. Binary Tree Zigzag Level Order Traversal - Recursive Approach
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
var zigzagLevelOrder = function (root) {
    let ans = [];

    function traverse(curr, level) {
        if (!curr)
            return;

        if (!ans[level]) {
            ans[level] = [];
        }

        if (level % 2 != 0) {
            ans[level].unshift(curr.val)
        } else {
            ans[level].push(curr.val)
        }

        traverse(curr.left, level + 1);
        traverse(curr.right, level + 1);
    }

    traverse(root, 0);

    return ans;
};