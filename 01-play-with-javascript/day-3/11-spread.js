



// over data, we have 2 types of operations

// 1. mutable
// 2. immutable 

//------------------------------------------------------------

let menu1 = ['biryani', 'meals'];
let menu2 = ["chinise", "continental"];

let newMenu = menu1.concat(menu2);
console.log(newMenu);

// or

let newMenu2 = [...menu1, ...menu2];
console.log(newMenu2);
let newMenu3 = [...menu1, 'idly', ...menu2];

//------------------------------------------------------------


let o1 = {
    x: 1,
    y: 2
}
let o2 = {
    y: 20
}
// let newO = { ...o1, ...o2 };
let newO = { ...o2, ...o1 };
console.log(newO);

//------------------------------------------------------------

function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let arr = [1, 2, 3];
func(arr[0], arr[1], arr[2]);
// or
func(...arr);


//------------------------------------------------------------


