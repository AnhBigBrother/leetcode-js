"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapNode = void 0;
var HeapNode = /** @class */ (function () {
    function HeapNode(val, left, right) {
        this.val = val ? val : 0;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
    return HeapNode;
}());
exports.HeapNode = HeapNode;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        var _this = this;
        this.insert = function (node, val) {
            if (val < node.val) {
                if (val >= node.left.val) {
                    var x = new HeapNode(val);
                    node.left.right = x;
                    x.left = node.left;
                    node.left = x;
                    x.right = node;
                }
                else {
                    _this.insert(node.left, val);
                }
            }
            else {
                if (val <= node.right.val) {
                    var x = new HeapNode(val);
                    node.right.left = x;
                    x.right = node.right;
                    node.right = x;
                    x.left = node;
                }
                else {
                    _this.insert(node.right, val);
                }
            }
        };
        this.push = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var val = args_1[_a];
                if (_this.mid === null) {
                    _this.mid = new HeapNode(val);
                    _this.head = _this.mid;
                    _this.tail = _this.mid;
                }
                else if (val <= _this.head.val) {
                    var x = new HeapNode(val);
                    x.right = _this.head;
                    _this.head.left = x;
                    _this.head = x;
                }
                else if (val >= _this.tail.val) {
                    var x = new HeapNode(val);
                    _this.tail.right = x;
                    x.left = _this.tail;
                    _this.tail = x;
                }
                else {
                    _this.insert(_this.mid, val);
                }
                _this.size++;
            }
        };
        this.toArray = function () {
            var p = new HeapNode();
            p.right = _this.head;
            var ans = [];
            while (p.right !== null) {
                ans.push(p.right.val);
                p = p.right;
            }
            return ans;
        };
        this.pop = function () {
            if (_this.size === 0)
                return;
            if (_this.size === 1) {
                _this.head = null;
                _this.tail = null;
                _this.mid = null;
                _this.size = 0;
                return;
            }
            var x = _this.tail.left;
            x.right = null;
            _this.tail = null;
            _this.tail = x;
            _this.size--;
        };
        this.length = function () {
            return _this.size;
        };
        this.top = function () {
            if (_this.tail === null)
                throw new Error('Queue is empty!');
            return _this.tail.val;
        };
        this.front = function () {
            if (_this.head === null)
                throw new Error('Queue is empty!');
            return _this.head.val;
        };
        this.head = null;
        this.mid = null;
        this.tail = null;
        this.size = 0;
    }
    return PriorityQueue;
}());
exports.default = PriorityQueue;
