
function defaults(obj, defaultProps){

    if((typeof obj !=='object') || (typeof(obj)== 'string') || typeof(defaultProps) == 'string' || (Array.isArray(defaultProps)===true))
    return 'Pass valid Arguments';



    let def_obj = obj;

    for (let key in defaultProps){

        if (def_obj[key] === undefined){ //checking and retriving the keys 

            def_obj[key] = defaultProps[key]; 

        }
    }return def_obj;
}

module.exports = defaults;