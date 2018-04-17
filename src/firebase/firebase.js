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

firebase
    .database()
    .ref()
    .set({ name: 'Jeff Moritz' });
