
// function with default params & rest param

function func(a = 0, b = 0, ...remainingArgs) {
    // if (!a) {
    //     a = 0;
    // }
    // if (!b) {
    //     b = 0;
    // }
    // a = a || 0;
    // b = b || 0;
    return a + b + remainingArgs.reduce((acc, item) => acc + item, 0);
}


console.log(func(12));
console.log(func(12, 13));
console.log(func(12, 13, 14, 15, 16, 17, 18, 19, 20));

