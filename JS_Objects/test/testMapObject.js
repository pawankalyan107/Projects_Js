const map_Obj = require('../mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
const testObject1 = { "": 'Bruce', ['age']: '36', location(){'Gotham'}}


const testMapObj=()=>{
    
    //test cases
    test1 = map_Obj(testObject);
    test2 = map_Obj(testObject1);
    
    //invalid Arguments
    test3 = map_Obj('');
    test4 = map_Obj([]);

    console.log(test1, test2, test3, test4)
}

testMapObj();