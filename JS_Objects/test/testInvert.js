const invert = require('../invert.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const testObject1 = {}

const testInvert=()=>{

    test1= invert(testObject) // returns inverted testobject
    test2= invert(testObject1) // returns empty testObject
    //invalid Arguments
    test3= invert([])
    test4= invert('')

    console.log(test1, test2, test3, test4)

}

testInvert(testObject);