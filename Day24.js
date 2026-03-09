//1021. Remove Outermost Parentheses
/**
 * Using Stack
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let res = "";
    let stack = [];
    let level = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push([s[i], level]);
            level++;
        } else {
            --level;
            stack.push([s[i], level]);
        }
    }

    while (stack.length != 0) {
        let curr = stack.pop()
        if (curr[1] != 0) {
            res = curr[0] + res;
        }
    }

    return res;
};

var removeOuterParentheses = function (s) {
    let res = "";
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push([s[i]]);
            if (stack.length > 1) {
                res = res + s[i];
            }
        } else {
            if (stack.length > 1) {
                res = res + s[i];
            }
            stack.pop();
        }
    }

    return res;
};

/**
 * Without using stack
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let res = "";
    let level = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++level;
            if (level > 1) {
                res = res + s[i];
            }
        } else {
            if (level > 1) {
                res = res + s[i];
            }
            --level;
        }
    }

    return res;
};

//150. Evaluate Reverse Polish Notation
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(+num1 + +num2)
        } else if (tokens[i] === "-") {
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(+num2 - +num1)
        } else if (tokens[i] === "*") {
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(+num2 * +num1)
        } else if (tokens[i] === "/") {
            let num1 = stack.pop();
            let num2 = stack.pop();
            let res = Math.trunc(+num2 / +num1)
            res = res === 0 ? 0 : res;
            stack.push(res);
        } else {
            stack.push(tokens[i]);
        }

    }


    return Number(stack.pop());
};

var evalRPN = function (tokens) {
    let stack = [];
    const map = {
        "+": (a, b) => (b + a),
        "-": (a, b) => (b - a),
        "*": (a, b) => (b * a),
        "/": (a, b) => Math.trunc(b / a),
    }
    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[tokens[i]](+a, +b);
            stack.push(ans);
        } else {
            stack.push(tokens[i]);
        }

    }


    return Number(stack.pop());
};