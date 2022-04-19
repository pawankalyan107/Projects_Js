const reduce = require('../reduce');
const items = [1, 2, 3, 4, 5, 5]; 
const items2 = '';
const items3 = ()=>{}

const testReduce=()=>{

    //test cases
    const test1 = reduce(items, undefined, 5);
    const test2 = reduce(items2)
    const test3 = reduce(items3)
    
    return console.log(test1, test2, test3)
}
testReduce()