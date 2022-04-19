function pairs(obj){

    if((typeof obj !=='object') || (typeof(obj)== 'string') || Array.isArray(obj) ==true)
    return 'Pass valid Arguments';

    let pair = []

    for (const [key, value] of Object.entries(obj)){

        pair.push([key, value]); //pairs are pushed into an array

    }return pair
}

module.exports=pairs;