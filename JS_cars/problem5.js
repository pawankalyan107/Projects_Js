

function problem5(inventory) {

    if(typeof inventory == ('string') || (typeof inventory == ('number')) || typeof inventory == ('function')){

        return 'Invalid Argument!';
    }


    let oldcars = [];

   // finding caryear before 2000 year
   for (let index = 0; index < inventory.length; index++){

    if(inventory[index].car_year<2000) {

        oldcars.push(inventory[index].car_year)
    };

   };
   console.log(oldcars.length);
   
   return oldcars;
};


module.exports=problem5;