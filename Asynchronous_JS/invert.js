function invert(obj){

    if((typeof obj !=='object') || (typeof(obj)== 'string') || Array.isArray(obj) ==true)
    return 'Pass valid Arguments';

    let invertedObj={};

    for(let key in obj){

        invertedObj[obj[key]]=key; //inverting the object key into value and vice versa
    }
    return invertedObj;
}

module.exports=invert;