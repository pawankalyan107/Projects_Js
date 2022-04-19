const testFunc3 = require( '../cacheFunction');

const cb=()=>{
    return 'invoke';
}
function testCacheFunction(){

    return {
        //test cases
        case1: testFunc3(cb(), 1),
        case2: testFunc3(cb(), 5),
        case3: testFunc3(cb(), 4),
        case4: testFunc3(cb(), 4)
    }
}
console.log(testCacheFunction());