const inventory=require('../inventory');
const problem4=require('../problem4');

const testProblem4=()=>{

    // test cases
    const Test=problem4(inventory);
     
    const Test1=problem4("");
      
    const Test2=problem4(1);
  
    const Test3=problem4(()=>{})
        
    console.log(Test,Test1,Test2, Test3);
}   

testProblem4();
