function findElement(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n)
            return i;
    }

    return -1;
}

function countNegatives(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            count++;
    }

    return count;
}

function findLargest(arr) {
    let largest = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest)
            largest = arr[i];
    }

    return largest;
}

function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest)
            smallest = arr[i];
    }

    return smallest;
}


function secondLargest(arr) {
    if (arr.length < 2)
        return null;
    let largest = -Infinity;
    let secLargest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secLargest && arr[i] != largest) {
            secLargest = arr[i];
        }
    };

    return secLargest;
}

let arr = [4, 2, 0, 10, 8, 30,30];
let arr1 = [2, -9, 17, 0, 1, -10, -4, 8];
let arr2 = [];

console.log(findElement(arr, 10)); 
console.log(countNegatives(arr1)); 
console.log(findLargest(arr)); 
console.log(findSmallest(arr1));
console.log(secondLargest(arr));