/*global console */

// // Object destructuring:
//
// const person = {
//     name: 'Jeff',
//     age: 69,
//     location: {
//         city: 'Rohnert Park',
//         temp: 56
//     }
// };
//
// console.log(`${person.name} is ${person.age}`);
//
// // destructuring
// // Goal use a name and age variable
//
// const { name = Anonymous, age = 21 } = person;
//
// console.log(`${name} is ${age}`);
//
// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }
// const { name: firstName = 'Anonymous', age: age2 } = person;
//
// console.log(`${firstName} is ${age2} !!!`);
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);  // Penguin, Self-Published

//
// Array destructuring:
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const address = [];

// const [street, city, state, zip] = address;
const [, city, state = 'California'] = address;

console.log(`Your are in ${address[1]} ${address[2]}`);

console.log(`Your are in ${city} ${state}`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);





























