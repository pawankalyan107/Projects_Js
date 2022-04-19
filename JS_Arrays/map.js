

function map(items, cb=(item, index)=>{
    
    return item * index
}){
    if( typeof items == 'numbers' || typeof items == 'function' || typeof items == 'string'){
        
        return "Invalid Argument, Pass Arrays"
    }

    var mappedElements=[];

    //each element maped with index by invoking callback 
    for(index=0; index<items.length; index++){
        
        mappedElements.push(cb(items[index], index));
       
    }return mappedElements;
}

module.exports=map;

//output : [0, 2, 6, 12, 20, 25]