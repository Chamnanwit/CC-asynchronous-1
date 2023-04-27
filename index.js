// Synchronous Task == one thing at a time

// console.log(1);
// console.log(2);
// console.log(a);
// console.log(4);

// Asyncronous Task == multiple thing at a time (but 1 thread)

function execute() {
    console.log('EXECUTE!!!')
}
//execute();

function execute2() {
    console.log('EXECUTE!!! 2')
}

console.log('Before');
setTimeout(execute2,10000);
console.log('After');
setTimeout(execute,5000);