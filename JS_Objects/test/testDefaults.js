const defaults = require('../defaults.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const testObject1 = { director: 'christopher Nolan', music: 'Hanszimmer' };
const obj = {name: 'Bat Man', villan : 'Joker'} 

const testDefaults = ()=>{
    
    test1 = defaults(testObject, obj);
    test2 = defaults(testObject1, obj)
    test3 = defaults('',[]);
    test4 = defaults('', '')

    console.log(test1, test2, test3, test4)
}

testDefaults()