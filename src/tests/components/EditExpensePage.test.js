/*global console, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />
    );
});

test('should render the EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    // expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
