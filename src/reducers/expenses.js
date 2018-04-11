/*global console */

const expensesReducerDefaultState = [];

// Expenses reducer:
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; // Same as state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            // return state.filter((expense) => {
            //     return expense.id !== action.expense.id;
            // });
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
