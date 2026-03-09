//Count the number of digits in a number.
function countDigits(n) {
    if (n == 0)
        return 1;
    n = Math.abs(n);
    let count = 0;

    while (n > 0) {
        count++;
        n = Math.trunc(n / 10);
    }

    return count;
}

console.log(countDigits(-832900));//6

console.log("------------------------")

//Check the Palindrome Number

function isPalindrome(n) {
    if (n<0)
        return false;
   
    let originalNumber = n;
    let reverseNumber = 0;
    while (n > 0) {
        reverseNumber = reverseNumber * 10 + n % 10;
        n = Math.trunc(n / 10);
    }

    return originalNumber === reverseNumber;
}

console.log(isPalindrome(14434413));

console.log("------------------------")

//Reverse an integer

function reverseInteger(n) {
    let originalNumber = n;
    n = Math.abs(n);
    let reverseNumber = 0;
    while (n > 0) {
        reverseNumber = reverseNumber * 10 + n % 10;
        n = Math.trunc(n / 10);
    }

    let limit = Math.pow(2, 31);

    if (reverseNumber < -limit || reverseNumber > limit - 1)
        return 0;

    return originalNumber < 0 ? -1 * reverseNumber : reverseNumber;
    
}

console.log(reverseInteger(-14434413999))