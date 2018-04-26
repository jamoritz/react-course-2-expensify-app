/*global console */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    startAddExpense,
    editExpense,
    startEditExpense,
    removeExpense,
    startRemoveExpense,
    setExpenses,
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

let originalJasmineTimeoutInterval;
beforeEach((done) => {
    originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    // console.log(`original jasmine timeout interval = ${originalJasmineTimeoutInterval}`);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    const expensesData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt };
    });
    database
        .ref(`users/${uid}/expenses`)
        .set(expensesData)
        .then(() => done());
});
afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval;
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    store
        .dispatch(startRemoveExpense({ id }))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            });

            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBe(null);
            done();
        });
});

test('should setup edit expense action object', () => {
    const updates = {
        description: 'This is a test and only a test',
        note: 'This is a note',
        amount: 123456,
        createdAt: 100037
    };
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: updates
    });
});

test('should edit expense from firebase', (done) => {
    const updates = {
        description: 'This is a test and only a test',
        note: 'This is a note',
        amount: 123456,
        createdAt: 100037
    };
    const id = expenses[1].id;
    const store = createMockStore(defaultAuthState);
    store
        .dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });
            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(updates);
            done();
        });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            // console.log(snapshot.val());
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store
        .dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            // console.log(snapshot.val());
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
