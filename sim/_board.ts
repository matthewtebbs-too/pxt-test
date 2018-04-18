/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC
*/

/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    export class TestBoard extends BaseBoard {
        private static _board: TestBoard = new TestBoard();

        public static get singleton(): TestBoard {
            return this._board;
        }

        public initAsync(msg: SimulatorRunMessage): Promise<void> {
            this.init();

            return Promise.resolve();
        }

        public init() {
            /* do nothig */
        }

        public kill() {
            /* do nothig */
        }

        public receiveMessage(msg: SimulatorMessage) {
            /* do nothing */
        }

        public updateView() {
            /* do nothing */
        }
    }

    initCurrentRuntime = (msg: SimulatorMessage) => {
        return runtime.board = singletonTestBoard();   /* will be initialized by runtime */
    };

    export function singletonTestBoard(): BaseBoard   { return TestBoard.singleton; }
}
