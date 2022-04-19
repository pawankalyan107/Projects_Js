function problem6(inventory) {
    //checking for correct argument
    if(typeof inventory == ('string') || (typeof inventory == ('number')) || typeof inventory == ('function')){

        return 'Invalid Argument!';
    }

    let customercars = []

    for(index = 0; index < inventory.length; index++){
        // checking for carmodels
        if(inventory[index]["car_make"] == "BMW" || inventory[index]["car_make"] == "Audi"){

            customercars.push(inventory[index])
        };
    };
    
    return JSON.stringify(customercars)
};


module.exports=problem6;
