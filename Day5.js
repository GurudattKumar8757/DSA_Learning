function removeDuplicates(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > nums[x]) {
            nums[++x] = nums[i];
        }
    }
    return (x + 1);
}


let nums = [-10,-7,-7,-4,-4,0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums))
console.log("--------------------")


function removeElement(nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
}

let nums1 = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2

console.log(removeElement(nums1, val))
console.log("--------------------")

function reverseString(s) {
    let n = s.length;
    for (let i=0; i < Math.trunc(n / 2);i++){
        let temp = s[i];
        s[i] = s[n-1-i];
        s[n-1-i] = temp;
    }
}

let s = ["H", "a", "n", "n", "a", "h"]
reverseString(s)

console.log(s)
console.log("--------------------")

function maximumProfit(prices) {
    let min = 0;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] < prices[min]) {
            min = i;
        }
        if (prices[i] - prices[min] > maxProfit) {
            maxProfit = prices[i] - prices[min];
        }
    }

    return maxProfit;
}

let prices = [7, 6, 4, 3, 1];

console.log(maximumProfit(prices));
console.log("--------------------")


function maximumDifference(nums) {
    let min = 0;
    let maxDifference = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[min]) {
            min = i;
        }
        if (nums[i]>nums[min]&&nums[i] - nums[min] > maxDifference) {
            maxDifference = nums[i] - nums[min];
        }
    }

    return maxDifference;
}

let nums2 = [1, 5, 2, 10]
console.log(maximumDifference(nums2));
console.log("--------------------")

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--){
        if (p2 < 0) {
            break;
        }
        if (p1>=0&&nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
            
        }
    }
}

let nums3 = [1], m = 1, nums4 = [], n = 0;
merge(nums3, m, nums4, n);
console.log(nums3);