function fun(num) {
    if (num == 0) return;

    console.log(num);
    num = num - 1;
    fun(num);
}

let a = 6;
fun(a);

//Find sum of n number

function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

console.log(sum(5))


let arr = [5, 3, 2, 0, 1]

function sumOfArray(n) {
    if (n == 0) return arr[n];

    return arr[n] + sumOfArray(n - 1);
}

console.log(sumOfArray(arr.length - 1));

function sumOfOdd(n) {
    if (n == 0) {
        return arr[n] % 2 == 0 ? 0 : arr[n];
    }

    return arr[n] % 2 == 0 ? 0 + sumOfOdd(n - 1) : arr[n] + sumOfOdd(n - 1);
}

console.log(sumOfOdd(arr.length - 1));


function factorial(n) {
    if (n == 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));


function isPowerOfTwo(n) {
    if (n == 1) return true;
    else if (n < 1 || n % 2 != 0) return false;

    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(1))