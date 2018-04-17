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

database.ref().set({
    name: 'Jeff Moritz',
    age: 69,
    isSingle: false,
    location: {
        city: 'Rohnert Park',
        country: 'United States'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(70);
database.ref('location/state').set('California');

database.ref('attributes/height').set('5-ft - 10-in');
database.ref('attributes/weight').set('212.8 lbs');
