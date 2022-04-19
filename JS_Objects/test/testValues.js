const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
const values = require('../values.js');
const testObject1 = { "": 'Bruce', ['age']: '36', location(){'Gotham'}}

function testValues(){

    //test cases
    test1= values(testObject);
    test2= values(testObject1);
    //invalid arguments
    test3= values('');
    test4= values(undefined);

    console.log(test1, test2, test3, test4)
}

testValues();