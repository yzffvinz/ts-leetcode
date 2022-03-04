"use strict";
class SNode {
    constructor(val, prev, next, child) {
        this.val = (val === undefined ? 0 : val);
        this.prev = (prev === undefined ? null : prev);
        this.next = (next === undefined ? null : next);
        this.child = (child === undefined ? null : child);
    }
}
function flatten(head) {
    if (!head) {
        return null;
    }
    const rst = head;
    let cursor = head;
    const dfs = [];
    let prev = null;
    while (cursor || dfs.length) {
        if (cursor) {
            const next = cursor.next;
            const child = cursor.child;
            // 如果有 child
            if (child) {
                next && dfs.push(next);
                cursor.next = child;
                cursor.child = null;
            }
            prev = cursor;
            cursor = cursor.next;
        }
        else {
            cursor = dfs.pop();
            cursor.prev = prev;
        }
    }
    return rst;
}
flatten;
