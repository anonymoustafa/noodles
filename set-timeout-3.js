process.nextTick(()=>{console.log('1')});
console.log('2');
setTimeout(function() { console.log('3')},2500);
console.log('4');
console.log('5');
console.log('6');
setImmediate(function heyday () {
        console.log('7')
});
