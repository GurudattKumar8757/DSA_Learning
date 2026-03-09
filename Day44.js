//572. Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let subTreeHash = serialize(subRoot);
    let treeHash = serialize(root);

    return treeHash.includes(subTreeHash)
};

let serialize = (root) => {
    let hash = "";
    function traverse(curr) {
        if (!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val;
        traverse(curr.left);
        traverse(curr.right);
    }

    traverse(root);
    return hash;
}