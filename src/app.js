/*global console */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import './styles/styles.scss';

import './firebase/firebase';
// import './playground/promises';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(`log in user: ${user.displayName}, email: ${user.email}`, user);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        console.log('log out');
        renderApp();
        history.push('/');
    }
});
