const firstName = 'Pedro';
const lastName = 'Pascal';
const age = 45;
const job = 'Actor';
const city = 'Medellin';

let result;

// Concatenation
result = firstName + ' ' + lastName;
console.log('Concatenation: ', result);
// Append
let fullName = 'Camilo';
fullName += ' ' + 'Garcia';
console.log('Append: ', fullName);
result = 'Hello, my name is ' + firstName + ' and I am ' + age;
// Escaping
result = 'That\'s awesome, I can\'t wait';
console.log('Escaping: ', result);
// Length
result = fullName.length;
// Concat method
result = firstName.concat(' ', lastName);
console.log('Concat method: ', result);
// Change case
result = firstName.toUpperCase();
console.log('Change to UpperCase: ', result);
result = firstName.toLowerCase();
console.log('Change to LowerCase: ', result);
// Index of
result = fullName.indexOf('a');
console.log('Index of: ', result);
result = fullName.lastIndexOf('a');
console.log('Last index of: ', result);
// CharAt
result = fullName.charAt(2);
console.log('CharAt: ', result);
// Get last char
result = fullName.charAt(fullName.length - 1);
console.log('Get last char: ', result);
// Substring
result = fullName.substring(0, 6);
console.log('Substring: ', result);
// Slice
result = fullName.slice(0, 6);
console.log('Slice: ', result);
result = fullName.slice(-3);
console.log('Slice: ', result);
// Split
result = fullName.split(' ');
console.log('Split: ', result);
// Replace
result = fullName.replace('Camilo', 'Pedro');
console.log('Replace: ', result);
// Includes
result = fullName.includes('Camilo');
console.log('Includes Camilo: ', result);
result = fullName.includes('Pedro');
console.log('Includes Pedro: ', result);

// Template literals
let html;
html = `
    <ul>
        <li>Name: ${fullName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;
console.log('Template literals: ', html);
var elemDiv = document.createElement('div');
elemDiv.innerHTML = html;
document.body.appendChild(elemDiv);