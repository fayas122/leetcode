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
var reverseList = function(head) {
    let prev = null;
    let crr = head;

    while (crr !== null) {
        let next = crr.next; 
        crr.next = prev;     
        prev = crr;          
        crr = next;          
    }

    return prev;
};