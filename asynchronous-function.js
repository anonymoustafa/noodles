async function async_hello() { return "async_hello" };
function normal_hello() { return "normal_hello" };

async_hello().then((value) => console.log(value))
async_hello().then((value) => console.log(value))
console.log(async_hello());
console.log('mostafa' + async_hello().then((value) => console.log(value)));


async_hello().then(console.log);
