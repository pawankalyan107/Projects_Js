const inventory=require('../inventory');
const problem3=require('../problem3');

const testProblem3=()=>{

    // test cases
    const Test=problem3(inventory);
     
    const Test1=problem3("");
      
    const Test2=problem3(1);
  
    const Test3=problem3(()=>{})
        
    console.log(Test,Test1,Test2, Test3);
}   

testProblem3();