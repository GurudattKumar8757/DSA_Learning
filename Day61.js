//131. Palindrome Partitioning
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];

    function isPlaindrom(str) {
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i++] != str[j--])
                return false;
        }
        return true;
    }

    function backtrack(path, remainingString) {
        if (!remainingString) {
            result.push([...path]);
        }

        for (let i = 1; i <= remainingString.length; i++) {
            let choices = remainingString.substring(0, i);

            if (!isPlaindrom(choices)) continue;

            path.push(choices);
            backtrack(path, remainingString.substring(i));
            path.pop();
        }
    }
    backtrack([], s);
    return result;
};