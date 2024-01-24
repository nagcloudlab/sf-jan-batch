

// function regularFunction() {
//     let i = 0;
//     while (i < 10) {
//         console.log(i);
//         i++;
//     }
// }

// regularFunction()

//------------------------------------------------------------

// function* generatorFunction() {
//     console.log("generatorFunction started");
//     let i = 0;
//     while (i < 10) {
//         console.log(i);
//         if (i % 2 === 0)
//             yield i;
//         i++;
//     }
// }

// ------------------------------------------------------------


function* eat() {
    console.log("eat started");
    let rice = yield "give me rice";
    console.log("rice is received ", rice);
    let curry = yield "give me curry";
    console.log("curry is received ", curry);
    let sweet = yield "give me sweet";
    console.log("sweet is received ", sweet);
    console.log("yum yum yum" + rice + curry + sweet);
    console.log("eat finished");
}


//------------------------------------------------------------

let eatGen = eat();
eatGen.next();

setTimeout(() => {
    eatGen.next("biryani");
    setTimeout(() => {
        eatGen.next("chicken curry");
        setTimeout(() => {
            eatGen.next("gulab jamun");
        }, 2000);
    }, 2000);
}, 2000);

//------------------------------------------------------------


