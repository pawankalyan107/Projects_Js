function values(obj){

    if((typeof obj !=='object') || (typeof(obj)== 'string') || Array.isArray(obj) ==true)
    return 'Pass valid Arguments';

    let value = []

    for(let key in obj){

        value.push(obj[key]); //values are pushed into array

    } return value
}

module.exports=values;