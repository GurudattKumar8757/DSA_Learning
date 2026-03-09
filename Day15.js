//Rotate List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head) return head;
    let length = 0;
    let curr = head;
    let tailNode = null;
    while (curr.next) {
        curr = curr.next;
        length++;
    }
    length++;
    let netRotate = k % length;
    tailNode = curr;

    if (netRotate == 0)
        return head;
    else {
        let tail = length - netRotate;
        curr = head;
        for (let i = 0; i < tail-1; i++) {
            curr = curr.next;
        }
        let newHead = curr.next;
        curr.next = null;
        tailNode.next = head;
        return newHead;
    }
};


var rotateRight = function (head, k) {
    if (!head) return head;
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    k = k % length;

    let slow = fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    return newHead;
};

// Swap Nodes in Pairs

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

//Iterative Solution :-
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let prevNode = dummy;
    let currNode = head;
    let nextNode = head.next;

    while (currNode && nextNode) {
        prevNode.next = nextNode;
        currNode.next = nextNode.next;
        nextNode.next = currNode;
        prevNode = currNode;
        currNode = prevNode.next;
        nextNode = currNode && currNode.next;
    }
    return dummy.next;
};


//Recursive Solution:- 
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let l = head;
    let r = head.next;
    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};