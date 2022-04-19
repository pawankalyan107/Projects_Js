const counterFactory=()=>{

  let counter=0;

  //incrementer and decrementer functions
  function decrease(){
      counter = --counter
      return --counter ;
  }
  function increase(){
     
      return ++counter;
  }
  return {
      
      increment:increase(),
      decrement:decrease(),
 }
}



module.exports=counterFactory;