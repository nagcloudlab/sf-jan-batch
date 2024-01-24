


//------------------------------------------
// trainer
//------------------------------------------

let trainer = {
    getTopic() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("trainer resolving promise");
                resolve("javascript");
                // reject(new Error("oops something went wrong"));
            }, 3000);
        });
        return promise;
    }
}


//------------------------------------------
// AI tool
//------------------------------------------

let aiTool = {
    getTopic(topic) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("ai-tool resolving promise");
                resolve("enriched-" + topic.toUpperCase());
                // reject(new Error("oops something went wrong"));
            }, 3000);
        });
        return promise;
    }
}

//------------------------------------------
// employee
//------------------------------------------

let employee = {
    doLearnV1() {
        console.log("employee: started learning");
        console.log("employee requesting trainer to teach a topic");
        const promise = trainer.getTopic();
        promise
            .then((topic) => {
                console.log("employee: learning with trainer about - " + topic);
                const promise = aiTool.getTopic(topic);
                promise
                    .then((enrichedTopic) => {
                        console.log("employee: learning with ai-tool about - " + enrichedTopic);
                        console.log("employee finished learning");
                    })
                    .catch((error) => {
                        console.log("employee: oops " + error.message);
                    })
            })
            .catch((error) => {
                console.log("employee: oops " + error.message);
            });
    },
    async doLearnV2() {
        try {
            console.log("employee: started learning");
            console.log("employee requesting trainer to teach a topic");
            const topic = await trainer.getTopic();
            const enrichedTopic = await aiTool.getTopic(topic);
            console.log("employee: learning with ai-tool about - " + enrichedTopic);
            console.log("employee finished learning");
        } catch (err) {
            console.log("employee: oops trainer rejected promise");
        }
    },
    doWork() {
        this.doLearnV2();
        console.log("employee: with other work");
    }
}

// employee.doWork();


//------------------------------------------
// promise chaining
//------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(100);
//     }, 3000);
// });

// promise
//     .then((result) => {
//         console.log("result-1: " + result);
//         return result * 2;
//     })
//     .then((result) => {
//         console.log("result-2: " + result);
//         return result * 2;
//     })
//     .then((result) => {
//         console.log("result-3: " + result);
//         return result * 2;
//     })
//     .then((result) => {
//         console.log("result: " + result);
//     })


//------------------------------------------


// const p1 = Promise.resolve(100); // call-1
// const p2 = Promise.resolve(200); // call-2
// const p3 = Promise.reject(0); // call-3

// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// Promise.race([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


//------------------------------------------


async function getTop5Todos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const todos = await response.json();
    return todos
}

async function getTop5Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
    const users = await response.json();
    return users
}

async function getTop5Posts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();
    return posts
}

async function getTop5() {
    const [todos, users, posts] = await Promise.all([getTop5Todos(), getTop5Users(), getTop5Posts()]);
    return {
        todos,
        users,
        posts
    }
}

getTop5()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })









