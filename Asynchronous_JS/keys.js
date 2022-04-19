function keys(obj){

    if((typeof obj !=='object') || (typeof(obj)== 'string') || Array.isArray(obj) ==true)
    return 'Pass valid Arguments';

    let names = []

    for (let key in obj){

        names.push(key);  // pushing keys into array

    }return names
}
module.exports=keys;