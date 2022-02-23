async function hello() {
  return await Promise.resolve("Hello");
};




hello().then(console.log);

