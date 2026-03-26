//98. Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root, lo = null, hi = null) {

    if (!root)
        return true;

    if ((lo != null && root.val <= lo) || (hi != null && root.val >= hi)) {
        return false;
    }
    let isLeftValidBST = isValidBST(root.left, lo, root.val);
    let isRightValidBST = isValidBST(root.right, root.val, hi);
    return isLeftValidBST && isRightValidBST

};


//700. Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root || root.val === val)
        return root;

    return val > root.val ? searchBST(root.right,val) : searchBST(root.left,val)
};