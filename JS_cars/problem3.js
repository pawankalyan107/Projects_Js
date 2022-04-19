function problem3(inventory) {

    if(typeof inventory == ('string') || (typeof inventory == ('number')) || typeof inventory == ('function')){

        return 'Invalid Argument!';
    }

    let carmodels = [];
    
    for (let index = 0; index < inventory.length; index++) {
       carmodels.push(inventory[index]["car_model"]);
    };
    cars = []
    //sorting car models sorting according to alphabetical order
    for(index=1; index<carmodels.length; index++) {
        
        const First = carmodels[index-1].toUpperCase();
        const Second = carmodels[index].toUpperCase();
        
        if (First < Second) {
            cars.push(First);
        };
        if (First > Second) {
            cars.push(Second);
        };
        if (First == Second){
            cars.push(First)
        }
    };
    return cars
};

module.exports=problem3;