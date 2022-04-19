const each = require('../each');

const items1 = [1, 2, 3, 4, 5, 5];
const items2 = '';
const items3 = ()=>{};

function testEach() {
    
    //test cases
    const test1 = each(items1);

    const test2 = each(items2);

    const test3 = each(items3);

    console.log(test1, test2, test3)   
}
testEach()