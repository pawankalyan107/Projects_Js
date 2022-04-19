function reduce(items, cb=(item, accumulator)=>{

    return accumulator+=item;

}, startingValue = undefined){

    if( typeof items == 'function' || typeof items == 'string'){
        
        return "Invalid Argument, Pass Arrays"
    }

    if (startingValue == undefined){

        startingValue = items[0];
        
    }
    var accumulator = 0;

    //invokes callback and stores return value in accumulator
    for(index = 0; index < items.length; index++){

        accumulator = cb(items[index], accumulator)

    }return accumulator + startingValue;
}



module.exports=reduce;
//output: 25
