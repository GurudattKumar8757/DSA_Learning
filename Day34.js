//42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let maxL = [];
    let maxR = [];
    maxL[0] = height[0];
    maxR[n - 1] = height[n - 1];
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(height[i], maxL[i - 1]);
        maxR[n - 1 - i] = Math.max(maxR[n - i], height[n - 1 - i]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        let waterTrap = Math.min(maxL[i], maxR[i]) - height[i];
        ans = ans + Math.max(waterTrap, 0);
    }
    return ans;
};