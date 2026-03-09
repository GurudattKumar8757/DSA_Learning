//28. Find the Index of the First Occurrence in a String
//KMP Algorithm
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    let lps = [0];
    let i = 0;
    let j = 1;
    while (j < m) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            ++i;
            ++j;
        } else {
            if (i === 0) {
                lps[j] = 0;
                ++j;
            } else {
                i = lps[i - 1];
            }
        }
    }

    i = j = 0;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else {
            if (j === 0) {
                ++i;
            } else {
                j = lps[j - 1];
            }
        }
        if (j === m) {
            return i - m;
        }
    }
    return -1;
};

//160. Intersection of Two Linked Lists (Using Two pointers)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let m = 0;
    let n = 0;
    let pA = headA;
    let pB = headB;
    while (pA) {
        ++m;
        pA = pA.next;
    }
    while (pB) {
        ++n;
        pB = pB.next;
    }

    let diff = Math.abs(n - m);
    for (let i = 0; i < diff; i++) {
        if (m > n) {
            headA = headA && headA.next;
        } else {
            headB = headB && headB.next;
        }
    }

    while (headA != headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
};

var getIntersectionNode = function (headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }

    return pA;
};