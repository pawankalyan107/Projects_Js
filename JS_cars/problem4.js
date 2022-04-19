function problem4(inventory) {

    if(typeof inventory == ('string') || (typeof inventory == ('number')) || typeof inventory == ('function')){

        return 'Invalid Argument!';
    }

    let carsyear = [];

    for (let index = 0; index < inventory.length; index++) {

       //pushing caryear to an array
       carsyear.push(inventory[index]["car_year"]);
   };
   return carsyear;
};


module.exports=problem4