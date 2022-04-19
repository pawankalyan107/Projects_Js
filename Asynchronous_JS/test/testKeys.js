const keys = require('../keys.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
const testObject1 = { "": 'Bruce', ['age']: '36', location(){'Gotham'}}

const testKeys=()=>{

    //returns Keys
    test1= keys(testObject); 
    test2= keys(testObject1);

    test3 = keys('');
    test4 = keys([]);

    console.log(test1, test2, test3, test4)
}

testKeys();