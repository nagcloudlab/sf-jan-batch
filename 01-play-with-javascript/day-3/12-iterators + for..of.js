

// iterator => obj which knows how to access items from a collection one at a time, while keeping track of its current position within that sequence.
// data-structure + iterator ==> iterable

//------------------------------------------------------------

// symbols

// - unique and immutable value
// - used as an identifier for object properties



//------------------------------------------------------------

let menu = ["biryani", "meals", "idly", "vada"];

// for (let menuitem of menu) {
//     console.log(menuitem);
// }

//------------------------------------------------------------

let myStackMenu = {
    items: ["biryani", "meals", "idly", "vada"],
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    done: this.items.length === 0,
                    value: this.items.pop()
                }
            }.bind(this)
        }
    }
}

for (let item of myStackMenu) {
    console.log(item);
}
let newMenu = [...myStackMenu]
let [m1, m2, m3, m4] = myStackMenu;

//------------------------------------------------------------


for (let i = 0; i < 10; i++) {
    console.log(i);
}


let person = {
    name: 'Nag',
    age: 34
}

for (let prop in person) {
    console.log(prop);
}

for (let char of person.name) {
    console.log(char);
}

//------------------------------------------------------------