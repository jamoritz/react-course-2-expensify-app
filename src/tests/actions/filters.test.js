/*global console, expect */

import moment from 'moment';

import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: startDate
    });
});

test('should generate set end date action object', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: endDate
    });
});

test('should generate set text filter object with provided text', () => {
    const providedText = 'Now it the time for all good men';
    const action = setTextFilter(providedText);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: providedText
    });
});

test('should generate set text filter object with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate action object fo sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});
