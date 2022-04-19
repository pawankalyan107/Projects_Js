const map = require("../map");
const items1 = [1, 2, 3, 4, 5, 5];
const items2 = '';
const items3 = ()=>{};


const testMap=()=>{

    //test cases
    const test1 = map(items1);

    const test2 = map(items2);
    const test3 = map(items3);
  


    return console.log(test1, test2, test3);
}
testMap()