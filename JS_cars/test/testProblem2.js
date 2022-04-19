const inventory=require('../inventory');
const problem2=require('../problem2');

const testProblem2=()=>{

    // test cases
    const Test=problem2(inventory);
     
    const Test1=problem2("");
      
    const Test2=problem2(1);
  
    const Test3=problem2(()=>{})
        
    console.log(Test,Test1,Test2, Test3);
} 

testProblem2();
