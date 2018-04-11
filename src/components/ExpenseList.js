/*global console */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// // forEach implementation -- does not generate ExpenseListItem output
// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         {/*{console.log(props.expenses.length)}*/}
//         {props.expenses.forEach((expense) => {
//             // console.log(`forEach: ${expense.description}`);
//             return <ExpenseListItem key={expense.id} {...expense} />;
//         })}
//     </div>
// );

// map implementation -- does generate ExpenseListItem output
export const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
