

function find(items, element, cb = (items, element)=>{

    for (let index = 0; index < items.length; index++){

        if(element == items[index]){   //checking element in items

            return true;

        }else{

            continue;
        }
    }
}){
    if(typeof element == 'function' || typeof element == 'string'){
        
        return "Invalid Argument, Pass Arrays"
    }


    let x = NaN;

    x = cb(items,element)

    if (x == true){   //finding element by invoking callback function

        return element;
        
    }return undefined;

}


module.exports= find;
//output: 5; for above input
//input : 6
//output : undefined


