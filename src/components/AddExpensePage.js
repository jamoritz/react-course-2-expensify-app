/*global console */

import React from 'react';
import { connect } from 'react-redux';

import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/dashboard');
    };

    render = () => (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm action="add" onSubmit={this.onSubmit} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
