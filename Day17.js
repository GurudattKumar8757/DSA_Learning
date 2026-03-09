/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i]))
            count++;
    }
    return count;
};

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
};

/*
TC = O(n*m)
SC = O(1)
*/

var numJewelsInStones = function (jewels, stones) {
    let jewelsSet = new Set();
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        jewelsSet.add(jewels[i]);
    }

    for (let i = 0; i < stones.length; i++) {
        if (jewelsSet.has(stones[i]))
            count++;
    }
    return count;
};

/*
TC = O(n)
SC = O(1)
*/


//Find Most Frequent Vowel and Consonant

// var numJewelsInStones = function (jewels, stones) {
//     let count = 0;
//     for (let i = 0; i < stones.length; i++) {
//         if (jewels.includes(stones[i]))
//             count++;
//     }
//     return count;
// };

// let jewels = "aA";
// let stones = "aAAbbbb"
// console.log(numJewelsInStones(jewels,stones))

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let alphabetMap = new Map();
    let vowels = "aeiou"

    for (let i = 0; i < s.length; i++) {
        if (alphabetMap.has(s[i])) {
            let val = alphabetMap.get(s[i]);
            alphabetMap.set(s[i], ++val);
        } else {
            alphabetMap.set(s[i], 1)
        }
    }

    let vowelsCount = 0;
    let consonantsCount = 0;

    alphabetMap.forEach(function (value, key) {
        if (vowels.includes(key)) {
            vowelsCount = Math.max(vowelsCount, value);
        } else {
            consonantsCount = Math.max(consonantsCount, value);
        }
    })

    return vowelsCount + consonantsCount;
};

// var maxFreqSum = function (s) {
//     let alphabetMap = {};
//     let vowels = "aeiou"

//     for (let i = 0; i < s.length; i++) {
//         !alphabetMap[s[i]] ? (alphabetMap[s[i]] = 1) : ++alphabetMap[s[i]];
//     }

//     let vowelsCount = 0;
//     let consonantsCount = 0;

//     let mapKeys = Object.keys(alphabetMap);
//     for (let i = 0; i < mapKeys.length; i++) {
//         vowels.includes(mapKeys[i]) ? vowelsCount = Math.max(vowelsCount, alphabetMap[mapKeys[i]]) : consonantsCount = Math.max(consonantsCount, alphabetMap[mapKeys[i]])

//     }

//     return vowelsCount + consonantsCount;
// };