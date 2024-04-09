const testAsync = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => console.log("first"))
    // resolve must be a function, so () => console.log("first") insted of console.log("first")
    // setTimeout(function, timmer), so setTimeout(resolve, 2000) because resolve is function
    await Promise.resolve("hi").then((x) => setTimeout(() => console.log(x), 2000))
    console.log("second");
    return 0;
};

testAsync();
console.log('hello');