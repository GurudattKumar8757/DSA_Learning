function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));


//Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target)
            return i;
    }
    return -1;
}

let arr = [4, 9, 0, 2];
console.log(linearSearch(arr, 10));


//Binary Search - Using while loop

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (target === arr[middle]) {
            return middle;
        } else if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

//Binary Search - Using Recursion
function recursivebinarySearch(arr, l, r,target) {
    let middle = Math.floor((l + r) / 2);
    if (arr[middle] === target) return middle;
    if (r <= l) {
        return target === arr[middle] ? middle : -1;
    } 

    return target > arr[middle] ? recursivebinarySearch(arr, middle + 1, r, target) : recursivebinarySearch(arr, l, middle - 1, target); 
}

let arr = [12];
console.log(recursivebinarySearch(arr, 0, 0, 13));



//Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let flag = 0;
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                flag++;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (flag == 0)
            break;
    }
    return arr;
}

let arr = [9, 3, 5, 1, 8, 10, -11];
console.log(bubbleSort(arr));


//Selection Sort
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i; j < n; j++){
            if (arr[j] < arr[min])
                min = j;
        }
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [9, 3, 5, 1, 8, 10, -11];
console.log(selectionSort(arr));


//Insertion Sort

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}

let arr = [9, 3, 5, 1, 8, 10, -11];
console.log(insertionSort(arr));
