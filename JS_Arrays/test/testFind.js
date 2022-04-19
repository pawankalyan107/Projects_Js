const find = require('../find');
const items = [1, 2, 3, 4, 5, 5];

const testFind=()=>{
    
    //test cases
    const test1 = find(items, 5);
    const test2 = find(items, 6);
    const test3 = find(items, '');
    const test4 = find(items, ()=>{})

    return console.log(test1, test2, test3, test4);
}

testFind()