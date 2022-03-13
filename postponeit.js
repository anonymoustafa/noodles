console.log('1');
const postpone = async () => {
       await setTimeout(() => {console.log('2')},5000);
}

postpone();
console.log('3');
