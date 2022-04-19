const flatten = require('../flatten');
const nestedArray = [1, [2], [[3]], [[[4]]]];
const nestedArray1 = '';
const nestedArray2 = ()=>{};
const nestedArray3 = '1'


const testFlatten=()=>{
    
    //test cases
    const test1 = flatten(nestedArray);
    const test2 = flatten(nestedArray1);
    const test3 = flatten(nestedArray2);
    const test4 = flatten(nestedArray3);

    return console.log(test1, test2, test3, test4)
}
testFlatten();