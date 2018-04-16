/*global console, expect */

import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

// test('should ', () => {});

test('it should render the ExpensesSummary component with 3 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={'$1362.47'} />);
    expect(wrapper).toMatchSnapshot();
});

test('it should render the ExpensesSummary component with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={'$32.95'} />);
    expect(wrapper).toMatchSnapshot();
});

test('it should render the ExpensesSummary component with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});
