const testfunc2 = require('../limitFunctionCallCount');

function testLimitFunctionCallCount() {

    return {
        //test cases
        case1: testfunc2(undefined, 5)(),
        case2: testfunc2(undefined, 3)(),
        case3: testfunc2(undefined, 4)()
    };
}
console.log(testLimitFunctionCallCount());