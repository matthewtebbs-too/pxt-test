/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC
*/

/// <reference path='test.enums.d.ts'/>

//%
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% blockId=loops_forever
    //% block="forever" weight=55
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds.
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% blockId=loops_pause_async
    //% block="pause (ms) %pause" weight=54
    //% shim=loops::pauseAsync
    function pauseAsync(ms: number): void;
}

//%
declare namespace logic {
}

//% blockNamespace=test
declare class ANumber {
    //% blockCombine
    //% shim=.a property
    public readonly a: number;
}

//% blockNamespace=test
declare interface BNumber {
    //% blockCombine
    //% shim=.b property
    readonly b: number;
}

//% color=270 weight=96 icon="\uf128"
declare namespace test {
    //% blockId=test_create_a_number
    //% block="create ANumber"
    //% shim=test::createANumber
    function createANumber(): ANumber;

    //% blockId=test_create_b_number
    //% block="create BNumber"
    //% shim=test::createBNumber
    function createBNumber(): BNumber;
}
