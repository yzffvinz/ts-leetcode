class SNode {
    val: number;
    prev: SNode | null;
    next: SNode | null;
    child: SNode | null;
    constructor(val?: number, prev?: SNode, next?: SNode, child?: SNode) {
        this.val = (val === undefined ? 0 : val);
        this.prev = (prev === undefined ? null : prev);
        this.next = (next === undefined ? null : next);
        this.child = (child === undefined ? null : child);
    }
}

function flatten(head: SNode | null): SNode | null {
    if (!head) {
        return null;
    }
    const rst = head;
    let cursor: SNode | null = head;
    const dfs: SNode[] = [];
    let prev: SNode | null = null;

    while (cursor || dfs.length) {
        if (cursor) {
            const next: SNode | null = cursor.next;
            const child: SNode | null = cursor.child;
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
            cursor = dfs.pop() as SNode;
            cursor.prev = prev;
        }
    }

    return rst;
}

flatten;