//initializing function with callback function
function each(items, cb =(item,index)=>{

    return console.log(index+" : "+item);
}){
    if(typeof items == 'numbers' || typeof items == 'function' || typeof items == 'string'){
        
        return "Invalid Argument, Pass Arrays"
    }else{


    for(index=0;index<items.length;index++){

         cb(items[index], index)   //calling callback function with each element in items
        }
    }
}



module.exports=each;
