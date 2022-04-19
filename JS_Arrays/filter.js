function filter(items, elements=[] , cb = (items, element)=>{

    for (let index = 0; index < items.length; index++){

        if(element == items[index]){

            return element;

        }else{

            continue;
        }
    }
}){

    if(typeof elements == 'function' || typeof elements == 'string'){
        
        return "Invalid Argument, Pass Arrays"
    }

    let filterItems = []

    let index = 0
    
    //iterating items and invoking callback function
    while (index<elements.length) {

        if (cb(items,elements[index]) !== undefined){

            filterItems.push(cb(items,elements[index])); //pushing filterd items
        }
        index+=1

    }return filterItems;
}



module.exports=filter;
//output: [] for input above.
//input :[5,6,2,1,8]
//output : [5,2,1]
