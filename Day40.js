//104. Maximum Depth of Binary Tree - Top-Down approach
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
var maxDepth = function (root) {
    let maxLevel = 0;

    function traversal(curr, level) {
        if (!curr) {
            maxLevel = Math.max(maxLevel, level);
            return;
        }

        traversal(curr.left, level + 1)
        traversal(curr.right, level + 1)
    }

    traversal(root, 0);

    return maxLevel;
};


//104. Maximum Depth of Binary Tree - Bottom-up approach
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
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax, rightMax);
};

//112. Path Sum - Top-Down Approach
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }
    let ans = false;

    function traverse(curr, currSum) {
        if (!curr.left && !curr.right) {
            if (curr.val + currSum === targetSum) {
                ans = ans || true;
            }
        }
        curr.left && traverse(curr.left, curr.val + currSum);
        curr.right && traverse(curr.right, curr.val + currSum);
    }

    traverse(root, 0);
    return ans;
};

//112. Path Sum - Bottom-Up Approach
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }
    if (!root.right && !root.left) {
        return root.val === targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};