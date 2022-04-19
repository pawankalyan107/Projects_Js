function problem1(inventory) {

    if(typeof inventory == ('string') || (typeof inventory == ('number')) || typeof inventory == ('function')){

        return 'Invalid Argument!';
    }

    var id = 0;

    for (let index = 0; index < inventory.length; index++) {
        
        //checking for car id = 33
        if (inventory[index]["id"] === 33){
            console.log(`Car 33 is a ${inventory[index].car_year} ${inventory[index].car_make} ${inventory[index].car_model}`);
            
            id = index;
            break;
        };
    };
    return inventory[id];
}
module.exports=problem1;

