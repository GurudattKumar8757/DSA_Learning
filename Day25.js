//496. Next Greater Element I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let negMap = {};
    let stack = [];
    negMap[nums2[nums2.length - 1]] = -1;
    stack.push(nums2[nums2.length - 1])
    for (let i = nums2.length - 2; i >= 0; i--) {
        let nexG = -1;
        while (stack.length != 0) {
            if (nums2[i] > stack[stack.length - 1]) {
                stack.pop();
            } else {
                nexG = stack[stack.length - 1];
                break;
            }

        }
        negMap[nums2[i]] = nexG;
        stack.push(nums2[i]);
    }
    return nums1.map(x => negMap[x]);
};