/*global console, expect */

import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
    const action = { type: '@@INIT' };
    const state = expensesReducer(undefined, action);
    expect(state.length).toBe(0);
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expense = {
        id: '1234abc',
        description: 'House Payment',
        amount: 136247,
        note: '',
        createdAt: 1000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(4);
    expect(state[3]).toEqual(expense);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove an existing expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an existing expense by id ', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'Gas',
            note: 'Too high!',
            amount: 20792,
            createdAt: -1000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(3);
    expect(state[1].id).toBe('2');
    expect(state[1].description).toBe('Gas');
    expect(state[1].note).toBe('Too high!');
    expect(state[1].amount).toBe(20792);
    expect(state[1].createdAt).toBe(-1000);
});

test('should not edit an expense if id not found ', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Gas',
            note: 'Too high!',
            amount: 20792,
            createdAt: -1000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
