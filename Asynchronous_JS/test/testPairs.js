const pairs = require('../pairs');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };



const testPairs=()=>{

    //test cases
    test1= pairs(testObject);

    test2= pairs('');
    test3= pairs([]);
    test4= pairs(undefined)

    console.log(test1, test2, test3, test4)
}

testPairs();