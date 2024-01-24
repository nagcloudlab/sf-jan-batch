

const target = {
    message1: "hello",
    message2: "everyone",
};

const handler3 = {
    get(target, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }
        return Reflect.get(...arguments);
    },
    set(target, prop, value, receiver) {
        if (prop === "message2") {
            throw new Error("message2 is read-only");
        }
        return Reflect.set(...arguments);
    }
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world

// proxy3.message2 = "world"; // Error: message2 is read-only