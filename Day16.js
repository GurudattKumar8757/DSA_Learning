// Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//     let arrayOfWords = [];
//     let word = "";
//     for (let i = 0; i < s.length; i++){
//         if (s.charAt(i) == " ") {
//             word!=""?arrayOfWords.push(word):"";
//             word = "";
//         }
//         else {
//             word = word + s.charAt(i);
//         }
//     }
//     if (word != "")
//         arrayOfWords.push(word);

//     return arrayOfWords[arrayOfWords.length - 1].length;
// };

var lengthOfLastWord = function (s) {
    let count = 0;
    let flag = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") {
            count++;
        }
        else if (count > 0) {
            break;
        }
    }
    return count;
};
// Find Words Containing Character
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let sentence = "";
    for (let i = 0; i < words.length; i++) {
        if (i == words.length - 1) {
            sentence = sentence + words[i];
        } else {
            sentence = sentence + words[i] + " ";
        }
    }

    let result = [];
    let count = 0;
    let flag = false;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == x && !flag) {
            result.push(count);
            flag = true;
        } else if (sentence[i] == " ") {
            flag = false;
            count++;
        }
    }

    return result;
};

var findWordsContaining = function (words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] == x) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};