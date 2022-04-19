function flatten(elements,index=0){
    if( typeof elements == 'function' || typeof elements == 'string'){
        
        return "Invalid Argument, Pass Arrays"
    }else{

    let element = []
    
    if (index > elements.length){

    return elements;
}

elements =element.concat(...elements) //using spread operator elements get concated into array

index += 1

return flatten(elements,index)

}
}

module.exports=flatten;

//output: [1, 2, 3, 4]