

// javascript

// 1. Array / List  ( Untyped / Dynamic )
// 2. Set | WeakSet 
// 3. Map | WeakMap

// ------------------------------------------------------------

// Set
let menu = new Set();
menu.add("biryani");
menu.add("chicken curry");
menu.add("biryani");
// console.log(menu.size);

// ------------------------------------------------------------
let literalStyleMap = {
    "name": "Nag",
    "age": 35
}


// Map
const owner1 = { name: 'Nag' };
const owner2 = { name: 'Indu' };

let car1 = { name: 'BMW' };
let car2 = { name: 'Audi' };

const carOwners = new Map();
carOwners.set(car1, owner1);
carOwners.set(car2, owner2);

// console.log(carOwners.get(car1));

// ------------------------------------------------------------
// Home Work
//------------------------------------------------------------


const car11 = { name: 'BMW' };
const car22 = { name: 'BMW' };

const cars = new Set();
cars.add(car11);
cars.add(car22);

console.log(cars.size);

// ?

// ------------------------------------------------------------


