/*global console */

import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
    if (expenseCount > 0) {
        return (
            <div>
                <h1>
                    Viewing {expenseCount} {expenseWord} totalling {expensesTotal}
                </h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Viewing no expenses</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: numeral(selectExpensesTotal(visibleExpenses) / 100).format('$0,0.00')
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
