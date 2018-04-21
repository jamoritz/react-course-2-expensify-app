/*global console */

import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCTGK5Xeow7H-lny4G9_bT6u9BM8fPjgMM',
    authDomain: 'expensify-99f3a.firebaseapp.com',
    databaseURL: 'https://expensify-99f3a.firebaseio.com',
    projectId: 'expensify-99f3a',
    storageBucket: 'expensify-99f3a.appspot.com',
    messagingSenderId: '1008482088668'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('child removed: ', snapshot.key, snapshot.val());
// });
//
// // child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('child changed: ', snapshot.key, snapshot.val());
// });
//
// // child_added event
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('child added: ', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     // console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database
//     .ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         // console.log(snapshot.val());
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// const expenses = [
//     {
//         description: 'Buy food',
//         amount: '12345',
//         note: 'For Sparky',
//         createdAt: 1000
//     },
//     {
//         description: 'Rent',
//         amount: '136247',
//         note: 'For April',
//         createdAt: 10000
//     },
//     {
//         description: 'P.G.E.',
//         amount: '20749',
//         note: 'For May',
//         createdAt: 100000
//     }
// ];
//
// expenses.map((expense) => {
//     database.ref('expenses').push(expense);
// });

// database.ref('notes/-LA_ItehwstoXrP9DI6y').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         apoijsdfpoijwe: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };
//
// const notes = [
//     {
//         id: '12',
//         title: 'First note!',
//         body: 'This is my note'
//     },
//     {
//         id: '761ase',
//         title: 'Another note',
//         body: 'This is my note'
//     }
// ];
//
// database.ref('notes').set(notes);

// const onValueChange = database.ref().on(
//     'value',
//     (snapshot) => {
//         const val = snapshot.val();
//         // console.log(val);
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//     },
//     (error) => {
//         console.log('Error when fetching data.', error);
//     }
// );
//
// setTimeout(() => {
//     database
//         .ref()
//         .update({
//             name: 'Steve Kelez',
//             'job/company': 'Computer Recycling Center',
//             'job/title': 'Salesperson'
//         })
//         .then(() => {
//             console.log('Successfully changed the name, job title and company.');
//         })
//         .catch((error) => {
//             console.warn('Error setting the name, job title and company.', error);
//         });
// }, 5000);
//
// setTimeout(() => {
//     database
//         .ref()
//         .update({
//             name: 'Jeff Moritz',
//             'job/company': 'Amazon',
//             'job/title': 'Software Engineer'
//         })
//         .then(() => {
//             console.log('Successfully changed the name, job title and company.');
//         })
//         .catch((error) => {
//             console.warn('Error setting the name, job title and company.', error);
//         });
// }, 10000);

// const onValueChange = database.ref().on(
//     'value',
//     (snapshot) => {
//         console.log(snapshot.val());
//     },
//     (error) => {
//         console.log('Error with data fetching.', error);
//     }
// );

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database
//     .ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database
//     .ref()
//     .set({
//         name: 'Jeff Moritz',
//         age: 69,
//         stressLevel: 6,
//         job: {
//             title: 'Software Developer',
//             company: 'Google'
//         },
//         location: {
//             city: 'Rohnert Park',
//             country: 'United States'
//         }
//     })
//     .then(() => {
//         console.log('Initial data has been saved.');
//     })
//     .catch((error) => {
//         console.warn('Error setting the initial data.', error);
//     });

// database.ref().set('This is my data');

// database
//     .ref('attributes')
//     .set({
//         height: '5-ft - 10-in',
//         weight: '212.8 lbs'
//     })
//     .then(() => {
//         console.log('Successfully set the height and weight.');
//     })
//     .catch((error) => {
//         console.warn('Error setting the height and weight.', error);
//     });

// console.log('I made a request to change the data.');

// // Preferred way to remove data
// database
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Successfully removed the isSingle member.');
//     })
//     .catch((error) => {
//         console.warn('Error when attempting to remove the isSingle member.', error);
//     });
//
// // database.ref('isSingle').set(null); // This works to remove the object too

// database
//     .ref()
//     .update({
//         name: 'Mike',
//         age: 29,
//         job: 'Software Developer',
//         isSingle: null
//     })
//     .then(() => {
//         console.log('Successfully changed the name and age.');
//     })
//     .catch((error) => {
//         console.warn('Error setting the name and age.', error);
//     });

// // This doesn't work as expected -- it loses the country
// // Because 'update' only works at the root level (not at the nested level)
// database
//     .ref()
//     .update({
//         job: 'Manager',
//         location: {
//             city: 'Boston'
//         }
//     })
//     .then(() => {
//         console.log('Successfully changed the name and age.');
//     })
//     .catch((error) => {
//         console.warn('Error setting the name and age.', error);
//     });

// // This does work as expected
// database
//     .ref()
//     .update({
//         job: 'Manager',
//         'location/city': 'Boston'
//     })
//     .then(() => {
//         console.log('Successfully changed the name and age.');
//     })
//     .catch((error) => {
//         console.warn('Error setting the name and age.', error);
//     });

// database
//     .ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     })
//     .then(() => {
//         console.log('Successfully updated stressLevel, job/company, and location/city.');
//     })
//     .catch((error) => {
//         console.log(
//             'Encountered an error while updated stressLevel, job/company, and location/city.',
//             error
//         );
//     });
