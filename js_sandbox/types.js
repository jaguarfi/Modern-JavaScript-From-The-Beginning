// PRIMITIVE TYPES

// String
const name = 'Juan Perez';
console.log(typeof name );

// Number
const age = 53;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let home;
console.log(typeof home);

// Symbol
const sym = Symbol();
console.log(typeof sym);


// REFERENCE TYPES - Objects 

// Array
const hobbies = ['movies', 'music', 'dancing'];
console.log(typeof hobbies);

// Object literal
const address = {
    city: 'Miami',
    state: 'FL'
};
console.log(typeof address);

// Date
const today = new Date();
console.log(typeof today);

// CONVERSIONS

// Number to String
let numericValue = 5;
console.log(`${numericValue} is a ${typeof numericValue}`);
console.log(String(numericValue), 'is a', typeof String(numericValue));

// Boolean to String
let booleanValue = true;
console.log(`${booleanValue} is a ${typeof booleanValue}`);
console.log(String(booleanValue), 'is a', typeof String(booleanValue));

// Date to String
let dateValue = new Date();
console.log(`${dateValue} is a ${typeof dateValue}`);
console.log(String(dateValue), 'is a', typeof String(dateValue));

// Array to String
let arrayValue = ['one', 'two', 'three'];
console.log(`${arrayValue} is a ${typeof arrayValue}`);
console.log(String(arrayValue), 'is a', typeof String(arrayValue));

// Another method to convert types to String is: toString()

// ---------------------------------------------- //

// String to Number
let stringValue = '5';
console.log(`${stringValue} is a ${typeof stringValue}`);
console.log(`${Number(stringValue)} is a ${typeof Number(stringValue)}`);

let stringValue2 = 'Hello';
console.log(`${stringValue2} is a ${typeof stringValue2}`);
console.log(`${Number(stringValue2)} is a ${typeof Number(stringValue2)}`);

// Boolean to Number
let boolean = true;
console.log(`${boolean} is a ${typeof boolean}`);
console.log(`${Number(boolean)} is a ${typeof Number(boolean)}`);

// Another methods to convert types to Number are: parseInt() and parseFloat()

// ---------------------------------------------- //

// COHERSION

let value1 = 5;
let value2 = '6';
console.log(value1 + value2); // 56
console.log(value1 + Number(value2)); // 11
