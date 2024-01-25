


function teach() {
    let name = "Nag"
    try {
        console.log(name + " teaching javascript");
        //throw new Error("hate-javascript")
        setTimeout(() => {
            console.log(name + " teaching typescript");
            //throw new Error("hate-typescript")
            console.log("teaching javascript ends");
        }, 5000);
        console.log("teaching javascript ends");
    } catch (e) {
        console.log("caught " + e.message)
    }
}

teach()