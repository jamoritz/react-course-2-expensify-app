/*global console, expect */

import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero for no expenses (no argument provided)', () => {
    const total = selectExpensesTotal();
    // console.log(`total for no expenses (no argument provided) = ${total}`);
    expect(total).toBe(0);
});

test('should return zero for no expenses (an empty array provided)', () => {
    const total = selectExpensesTotal([]);
    // console.log(`total for no expenses (an empty array provided) = ${total}`);
    expect(total).toBe(0);
});

test('should return zero for no expenses (an empty object provided)', () => {
    const total = selectExpensesTotal({});
    // console.log(`total for no expenses (an empty object provided) = ${total}`);
    expect(total).toBe(0);
});

test('should correctly add up a single expense (a single expense object provided)', () => {
    const total = selectExpensesTotal(expenses[1]);
    // console.log(`total for expenses[1] = ${total}`);
    expect(total).toBe(expenses[1].amount);
});

test('should correctly add up multiple expenses (an array of expenses provided)', () => {
    const total = selectExpensesTotal(expenses);
    // console.log(`total for all expenses = ${total}`);
    expect(total).toBe(114195);
});
