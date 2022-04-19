function mapObject(obj,cb=(key, value)=>{

    if (typeof value === 'string'){ // adding key and value pairs

         return key+value;

    }else{

        return value*2;
    }
}){

    if((typeof obj !=='object') || (typeof(obj)== 'string') || Array.isArray(obj) ==true)
    return 'Pass valid Arguments';


    let x = []

    for(let key in obj){

        obj[key] = cb(key, obj[key]) //invoking callback and updating the object

        x.push(obj[key]);

    }return  x
}

module.exports=mapObject;
