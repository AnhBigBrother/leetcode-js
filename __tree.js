"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeToArr = exports.ArrayToTree = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var ArrayToTree = function (arr) {
    var n = arr.length;
    var TreeArray = [];
    var root = new TreeNode(arr[0]);
    TreeArray.push(root);
    var i = 0, j = 1;
    while (j < n) {
        if (arr[j] || arr[j] === 0) {
            TreeArray[i].left = new TreeNode(arr[j]);
            TreeArray.push(TreeArray[i].left);
        }
        if (arr[j + 1] || arr[j + 1] === 0) {
            TreeArray[i].right = new TreeNode(arr[j + 1]);
            TreeArray.push(TreeArray[i].right);
        }
        j += 2;
        i++;
    }
    return root;
};
exports.ArrayToTree = ArrayToTree;
var TreeToArr = function (root) {
    var arr = [];
    var solve = function (root, deep) {
        if (root === null) {
            return;
        }
        if (!arr[deep]) {
            arr[deep] = [];
        }
        arr[deep].push(root.val);
        solve(root.left, deep + 1);
        solve(root.right, deep + 1);
    };
    solve(root, 0);
    return arr;
};
exports.TreeToArr = TreeToArr;
