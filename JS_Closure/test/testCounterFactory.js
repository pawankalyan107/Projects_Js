const func1=require('../counterFactory.js');

function testCounterFactory(){
    const {increment,decrement} = func1();

    return {
       
       //test cases
       case2: increment,
       case3: decrement
       
    }
}

console.log(testCounterFactory());