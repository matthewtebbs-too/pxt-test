"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var serial;
(function (serial) {
    function writeString(text) {
        console.log(text);
        pxsim.runtime.board.writeSerial(text);
    }
    function writeLine(text) {
        writeString(text + "\r\n");
    }
    serial.writeLine = writeLine;
    function writeValue(name, value) {
        writeLine("" + (name ? name + ':' : '') + value);
    }
    serial.writeValue = writeValue;
})(serial || (serial = {}));
var pxsim;
(function (pxsim) {
    var console;
    (function (console) {
        function log(text) {
            serial.writeLine(text);
        }
        console.log = log;
        function logValue(name, value) {
            serial.writeValue(name, value);
        }
        console.logValue = logValue;
    })(console = pxsim.console || (pxsim.console = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var loops;
    (function (loops) {
        function forever(body) {
            pxsim.thread.forever(body);
        }
        loops.forever = forever;
        function pauseAsync(ms) {
            return Promise.delay(ms);
        }
        loops.pauseAsync = pauseAsync;
    })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var TestBoard = (function (_super) {
        __extends(TestBoard, _super);
        function TestBoard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(TestBoard, "singleton", {
            get: function () {
                return this._board;
            },
            enumerable: true,
            configurable: true
        });
        TestBoard.prototype.initAsync = function (msg) {
            this.init();
            return Promise.resolve();
        };
        TestBoard.prototype.init = function () {
        };
        TestBoard.prototype.kill = function () {
        };
        TestBoard.prototype.receiveMessage = function (msg) {
        };
        TestBoard.prototype.updateView = function () {
        };
        TestBoard._board = new TestBoard();
        return TestBoard;
    }(pxsim.BaseBoard));
    pxsim.TestBoard = TestBoard;
    pxsim.initCurrentRuntime = function (msg) {
        return pxsim.runtime.board = singletonTestBoard();
    };
    function singletonTestBoard() { return TestBoard.singleton; }
    pxsim.singletonTestBoard = singletonTestBoard;
})(pxsim || (pxsim = {}));
