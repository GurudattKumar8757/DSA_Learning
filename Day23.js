//232. Implement Queue using Stacks
var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let n = this.s1.length;
    if (this.s2.length == 0) {
        for (let i = 0; i < n; i++) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let n = this.s1.length;
    if (this.s2.length == 0) {
        for (let i = 0; i < n; i++) {
            this.s2.push(this.s1.pop());
        }
    }
    let ans = this.s2.pop();
    this.s2.push(ans);
    return ans;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


//20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//             stack.push(s[i]);
//         } else if (s[i] === ")" && stack[stack.length - 1] !== "(") {
//             return false;
//         } else if (s[i] === "]" && stack[stack.length - 1] !== "[") {
//             return false;
//         } else if (s[i] === "}" && stack[stack.length - 1] !== "{") {
//             return false;
//         } else {
//             stack.pop();
//         }
//     }

//     return stack.length === 0;
// };

var isValid = function (s) {
    let stack = [];

    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if (!top || s[i] != map[top]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

//155. Min Stack
var MinStack = function () {
    this.s = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.s.length == 0) {
        this.s.push([val, val]);
    } else {
        let min = this.s[this.s.length-1][1];
        if (val < min)
            min = val;

        this.s.push([val, min]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.s.pop(); 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.s[this.s.length - 1][1];
};


//  Your MinStack object will be instantiated and called as such:
 var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.push(0)
obj.pop()
 var param_3 = obj.top()
var param_4 = obj.getMin()

 console.log(param_3,param_4)
 