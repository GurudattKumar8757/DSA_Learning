//Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function middle(head) {
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function reverseSecondHalf(head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}


var isPalindrome = function (head) {
    let middleNode = middle(head);
    let headOfSecondHalf = reverseSecondHalf(middleNode);

    let firstList = head;
    let secondList = headOfSecondHalf;

    while (firstList && secondList) {
        if (firstList.val != secondList.val) {
            return false;
        } else {
            firstList = firstList.next;
            secondList = secondList.next;
        }

    }
    return true;
};

//Intersection of Two Linked Lists

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

/**
 * Approach 1:-
 * TC = O(m+n)
 * SC = O(m)/O(n)
 * */

var getIntersectionNode = function (headA, headB) {
    let hash = new Set();
    while (headB) {
        hash.add(headB);
        headB = headB.next;
    }
    while (headA) {
        if (hash.has(headA))
            return headA;

        headA = headA.next;
    }
    return null;
};

/**
 * Approach 2:-
 * TC = O(m+n)
 * SC = O(1)
 * */
function lengthOfLL(head) {
    let size = 0;
    while (head) {
        size++;
        head = head.next;
    }
    return size;
}

var getIntersectionNode = function (headA, headB) {
    let lengthA = lengthOfLL(headA);
    let lengthB = lengthOfLL(headB);
    let diff = Math.abs(lengthA - lengthB);
    if (lengthA > lengthB) {
        for (let i = 0; i < diff; i++) {
            headA = headA.next;
        }
    } else {
        for (let i = 0; i < diff; i++) {
            headB = headB.next;
        }
    }

    while (headA && headB) {
        if (headA == headB)
            return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;

}

//Remove Linked List Elements
//Use the concept of sentinel node (Used to keep watch at head node)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while (prev && prev.next) {
        if (prev.next.val == val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;
};

