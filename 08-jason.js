const { readFile } = require('fs');

// readFile('user.json', 'utf-8', (err, data) => {
//     console.log(data);
//     console.log(typeof data); // json == string ที่กำหนด fomatted ไว้
// });

const student = {
    name: 'John',
    age: 27,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    sayHi() {
        console.log('Hi');
    },
};
console.log(typeof student);

const json = JSON.stringify(student);
console.log(typeof json); // we've got a string!
// console.log(json);

let result = JSON.parse(json);

console.log(typeof result);
console.log(result);
