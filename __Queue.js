"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueueNode = /** @class */ (function () {
    function QueueNode(val, next) {
        this.val = val;
        this.next = next ? next : null;
    }
    return QueueNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.push = function (x) {
            if (_this.head === null) {
                _this.head = new QueueNode(x);
                _this.p.next = _this.head;
            }
            else {
                _this.p.next.next = new QueueNode(x);
                _this.p = _this.p.next;
            }
            _this.length++;
        };
        this.front = function () {
            if (_this.head === null)
                return null;
            return _this.head.val;
        };
        this.pop = function () {
            if (_this.length === 1) {
                _this.head = null;
                _this.p.next = null;
            }
            else {
                _this.head = _this.head.next;
            }
            _this.length--;
        };
        this.toArray = function () {
            var k = new QueueNode(-1);
            k.next = _this.head;
            var arr = [];
            while (k.next !== null) {
                arr.push(k.next.val);
                k = k.next;
            }
            return arr;
        };
        this.head = null;
        this.p = new QueueNode(-1);
        this.length = 0;
    }
    return Queue;
}());
exports.default = Queue;
