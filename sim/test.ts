/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC
*/

namespace pxsim {
    export class ANumber {
        constructor(public a: number) {}
    }

    export class BNumberImpl implements BNumber {
        constructor(public b: number) {}
    }
}

namespace pxsim.test {
    export function createANumber(): ANumber {
        return new ANumber(1234);
    }

    export function createBNumber(): BNumber {
        return new BNumberImpl(5678);
    }
}
