function problem2(inventory) {

    if(typeof inventory == ('string') || (typeof inventory == ('number')) || typeof inventory == ('function')){

        return 'Invalid Argument!';
    }
    //declaring the last car in the inventory
    let lastCar = inventory.length -1;

    console.log(`Last Car is ${inventory[lastCar].car_make} ${inventory[lastCar].car_model}`);
    
    return lastCar;
};


module.exports=problem2;