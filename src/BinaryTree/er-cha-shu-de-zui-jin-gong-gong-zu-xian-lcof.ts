// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
import {TreeNode} from './types';

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    function isAncestor(root: TreeNode | null): boolean {
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
};

lowestCommonAncestor;
