/*global console, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('should render the expense list filters', () => {
    const descriptionFilter = wrapper.find('input');
    const sortByFilter = wrapper.find('select');
    const dateRangeFilter = wrapper.find('DateRangePicker');

    expect(descriptionFilter).toBeDefined();
    expect(descriptionFilter.prop('type')).toEqual('text');
    expect(descriptionFilter.prop('value')).toEqual(filters.text);

    expect(sortByFilter).toBeDefined();
    expect(sortByFilter.prop('value')).toEqual(filters.sortBy);
    expect(sortByFilter.find('option')).toHaveLength(2);
    expect(sortByFilter.find('option').get(0).props.value).toEqual('date');
    expect(sortByFilter.find('option').get(1).props.value).toEqual('amount');

    expect(dateRangeFilter).toBeDefined();
    // expect(dateRangeFilter.prop('startDate')).toEqual(filters.startDate);
    // expect(dateRangeFilter.prop('endDate')).toEqual(filters.endDate);
    expect(dateRangeFilter.prop('startDate')).toBeNull();
    expect(dateRangeFilter.prop('endDate')).toBeNull();
});

test('should render the expense list filters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });

    const descriptionFilter = wrapper.find('input');
    const sortByFilter = wrapper.find('select');
    const dateRangeFilter = wrapper.find('DateRangePicker');

    expect(descriptionFilter).toBeDefined();
    expect(descriptionFilter.prop('type')).toEqual('text');
    expect(descriptionFilter.prop('value')).toEqual(altFilters.text);

    expect(sortByFilter).toBeDefined();
    expect(sortByFilter.prop('value')).toEqual(altFilters.sortBy);
    expect(sortByFilter.find('option')).toHaveLength(2);
    expect(sortByFilter.find('option').get(0).props.value).toEqual('date');
    expect(sortByFilter.find('option').get(1).props.value).toEqual('amount');

    expect(dateRangeFilter).toBeDefined();
    expect(dateRangeFilter.prop('startDate')).toEqual(altFilters.startDate);
    expect(dateRangeFilter.prop('endDate')).toEqual(altFilters.endDate);
});

test('should handle text change', () => {
    const value = 'Rent';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const datesChange = { startDate: altFilters.startDate, endDate: altFilters.endDate };
    // expect(wrapper.find('DateRangePicker').simulate('datesChange', datesChange));
    wrapper.find('DateRangePicker').prop('onDatesChange')(datesChange);
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', () => {
    const noCalendarFocused = null;
    const startDateFocused = 'startDate';
    const endDateFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(noCalendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(noCalendarFocused);
    wrapper.find('DateRangePicker').prop('onFocusChange')(startDateFocused);
    expect(wrapper.state('calendarFocused')).toBe(startDateFocused);
    wrapper.find('DateRangePicker').prop('onFocusChange')(endDateFocused);
    expect(wrapper.state('calendarFocused')).toBe(endDateFocused);
});
