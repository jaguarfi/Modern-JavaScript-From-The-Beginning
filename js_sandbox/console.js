console.clear();
// console log
console.log('Hello world');
console.log(123);
console.log(true);

var greeting = 'Hello';
console.log(greeting);

console.log([1, 2, 3, 4]);
console.log({a:1, b:2});


console.table({a:1, b:2, c:3})

console.error('This is an error');
console.warn('This is a warning');

console.time('Print');
let  sentence= [];
['H','e','l','l','o',' ','W','o','r','l','d'].forEach(l => sentence.push(l));
console.log(sentence.join(''));
console.timeEnd('Print');


// Data types