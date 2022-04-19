const problem1=require('../problem1.js');
const inventory=require('../inventory');

const testProblem1=()=>{

  // test cases
  const Test=problem1(inventory);
   
  const Test1=problem1("");
    
  const Test2=problem1(1);

  const Test3=problem1(()=>{})
      
  console.log(Test,Test1,Test2, Test3);
} 

testProblem1();