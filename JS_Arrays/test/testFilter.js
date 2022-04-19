const filter = require("../filter");

const items = [1, 2, 3, 4, 5, 5];

const elements1 = [5,6,2,1,8]

const elements = '';

const elements2 = ()=>{};

const testFilter=()=>{

    //test cases
    const test = filter(items, elements1);
    const test1 = filter(items, elements);
    const test2 = filter(items, elements2);
    

    return console.log(test, test1,test2)
}

testFilter()