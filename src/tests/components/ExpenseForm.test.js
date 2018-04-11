/*global console, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render the ExpenseForm with no expense data', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errorMsg').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper
        .find('input')
        .at(0)
        .simulate('change', {
            preventDefault: () => {},
            target: { value }
        });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

const validAmounts = ['123.45', '456', '6.7', '7.89'];

validAmounts.map((value) => {
    test(`should set amount on valid input (${value}) change`, () => {
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();

        wrapper
            .find('input')
            .at(1)
            .simulate('change', {
                preventDefault: () => {},
                target: { value }
            });
        expect(wrapper.state('amount')).toBe(value);
        expect(wrapper).toMatchSnapshot();
    });
});

const invalidAmounts = ['123.4567', '-123.45', 'abc123.45', '123abc.45'];

invalidAmounts.map((value) => {
    test(`should not set amount on invalid input (${value}) change`, () => {
        const wrapper = shallow(<ExpenseForm />);

        wrapper
            .find('input')
            .at(1)
            .simulate('change', {
                preventDefault: () => {},
                target: { value }
            });
        expect(wrapper.state('amount')).not.toBe(value);
        expect(wrapper.state('amount')).toBe('');
    });
});

test('should set note on textarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        preventDefault: () => {},
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('isAmountError')).toBe(false);
    expect(wrapper.state('isDescriptionError')).toBe(false);
    expect(wrapper.state('errorMsg')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
