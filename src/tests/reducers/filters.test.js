/*global console, expect */

import moment from 'moment';

import filtersReducer from '../../reducers/filters';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filtersReducerDefaultState);
});

test('should set sortBy to amount ', () => {
    const state = filtersReducer(filtersReducerDefaultState, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date ', () => {
    const currentState = {
        ...filtersReducerDefaultState,
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter ', () => {
    const text = 'Jeff is great!';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const startDate = moment(0).subtract(5, 'days');
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment(0).add(5, 'days');
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state.endDate).toBe(endDate);
});

test('should return current state with no action type given', () => {
    const state = filtersReducer(filtersReducerDefaultState, {});
    expect(state).toEqual(filtersReducerDefaultState);
});
