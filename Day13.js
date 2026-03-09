//Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Approach 1 (2 Pass):-
var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }

    let positionToDelete = length - n + 1;
    let prevPosition = 0;
    let prev = sentinel;

    while (prev && prevPosition != length - n) {
        prev = prev.next;
        prevPosition++;
    }

    prev.next = prev.next.next;

    return sentinel.next;
};

//Approach 2(1 Pass):-

var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let firstPointer = sentinel;
    let secondPointer = sentinel;
    for (let i = 0; i < n; i++) {
        secondPointer = secondPointer.next;
    }

    while (secondPointer.next) {
        secondPointer = secondPointer.next;
        firstPointer = firstPointer.next;
    }

    firstPointer.next = firstPointer.next.next;
    return sentinel.next;
};

//Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return head;
    let prev = curr = head;

    while (curr) {
        if (prev.val != curr.val) {
            prev.next = curr;
            prev = curr;
            curr = curr.next;
        } else {
            curr = curr.next;
        }
    }
    prev.next = null;

    return head;
};

var deleteDuplicates = function (head) {
    let curr = head;

    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};


//Odd Even Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = evenStart = head.next;
    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = evenStart;

    return head;

};