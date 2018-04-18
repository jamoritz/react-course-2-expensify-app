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

database
    .ref()
    .set({
        name: 'Jeff Moritz',
        age: 69,
        stressLevel: 6,
        job: {
            title: 'Software Developer',
            company: 'Google'
        },
        location: {
            city: 'Rohnert Park',
            country: 'United States'
        }
    })
    .then(() => {
        console.log('Initial data has been saved.');
    })
    .catch((error) => {
        console.warn('Error setting the initial data.', error);
    });

// database.ref().set('This is my data');

database
    .ref('attributes')
    .set({
        height: '5-ft - 10-in',
        weight: '212.8 lbs'
    })
    .then(() => {
        console.log('Successfully set the height and weight.');
    })
    .catch((error) => {
        console.warn('Error setting the height and weight.', error);
    });

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

database
    .ref()
    .update({
        stressLevel: 9,
        'job/company': 'Amazon',
        'location/city': 'Seattle'
    })
    .then(() => {
        console.log('Successfully updated stressLevel, job/company, and location/city.');
    })
    .catch((error) => {
        console.log(
            'Encountered an error while updated stressLevel, job/company, and location/city.',
            error
        );
    });
