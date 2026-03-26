//Heap Sort

function heapSort(arr) {
    let n = arr.length;

    //create a max heap
    for (let i = n - 1; i >= 0; i--) {
        heapifyDown(arr, i, n);
    }

    //sort the array
    for (let i = n - 1; i >= 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i);
    }
}

function heapifyDown(arr, i, n) {
    let largest = i;
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyDown(arr, largest,n);
    }
}

let arr = [1, 4, 10, 5, 3, 7, 9, 2];
heapSort(arr);

console.log(arr)


//169. Majority Element
//SP - O(n)
var majorityElement = function (nums) {
    let map = {};
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            ++map[nums[i]];
        }
    }
    for (let i = 0; i < n; i++) {
        if (map[nums[i]] > n / 2)
            return nums[i];
    }
};

//SC - O(1)
var majorityElement = function (nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

let arr = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(arr));