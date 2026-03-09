//Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let ans = new ListNode();
    let ansHead = ans;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            ans.next = list1;
            ans = ans.next;
            list1 = list1.next;
        } else {
            ans.next = list2;
            ans = ans.next;
            list2 = list2.next;
        }
    }
    if (!list1) {
        ans.next = list2;
    }
    if (!list2) {
        ans.next = list1;
    }
    return ansHead.next;
};

//Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let rem = 0;
    while (l1 || l2 || rem) {
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + rem;
        rem = Math.floor(sum / 10);
        let digit = sum % 10;
        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return ansHead.next;
};