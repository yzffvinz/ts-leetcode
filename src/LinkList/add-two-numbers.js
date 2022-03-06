class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
// Answer
function addTwoNumbers(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    const rst = new ListNode(0);
    let carry = 0;
    let cursor = rst;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        let val = val1 + val2 + carry;
        carry = val >= 10 ? 1 : 0;
        val %= 10;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        cursor.next = new ListNode(val);
        cursor = cursor.next;
    }
    if (carry) {
        cursor.next = new ListNode(carry);
    }
    return rst.next;
}
addTwoNumbers;
