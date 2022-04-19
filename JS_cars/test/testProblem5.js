const inventory=require('../inventory');
const problem5=require('../problem5');

const testProblem5=()=>{

     // test cases
     const Test=problem5(inventory);
      
     const Test1=problem5("");
       
     const Test2=problem5(1);
   
     const Test3=problem5(()=>{})
         
     console.log(Test,Test1,Test2, Test3);
 }
testProblem5();