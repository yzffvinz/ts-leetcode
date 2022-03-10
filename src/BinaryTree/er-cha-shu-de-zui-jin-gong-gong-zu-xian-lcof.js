"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lowestCommonAncestor(root, p, q) {
    function isAncestor(root) {
        if (!root) {
            return false;
        }
        let hasP = false;
        let hasQ = false;
        let dfs = [root];
        while (dfs.length) {
            const cur = dfs.pop();
            if (!cur) {
                continue;
            }
            if (cur.val === p.val) {
                hasP = true;
            }
            else if (cur.val === q.val) {
                hasQ = true;
            }
            if (hasP && hasQ) {
                return true;
            }
            dfs.push(cur.left, cur.right);
        }
        return false;
    }
    let cur = root;
    while (cur) {
        if (isAncestor(cur.left)) {
            cur = cur.left;
        }
        else if (isAncestor(cur.right)) {
            cur = cur.right;
        }
        else {
            break;
        }
    }
    return root;
}
;
lowestCommonAncestor;
