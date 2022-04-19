const inventory=require('../inventory');
const problem1 = require('../problem1');
const problem6=require('../problem6');

const testProblem6=()=>{

    // test cases
    const Test=problem6(inventory);
     
    const Test1=problem6("");
      
    const Test2=problem6(1);
  
    const Test3=problem6(()=>{})
        
    console.log(Test,Test1,Test2, Test3);
} 

testProblem6();

