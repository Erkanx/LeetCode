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
 var deleteDuplicates = function(head) {
    let cur = head;
    
    if(head === null || head.next ===null){
        return head;   
    }

    while(cur.next !== null){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
      
}