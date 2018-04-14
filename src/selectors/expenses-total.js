/*global console */

export default (expenses) => {
    if (expenses && expenses.constructor.name === 'Array') {
        return expenses
            .map((expense) => expense.amount)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    } else if (expenses && expenses.constructor.name === 'Object') {
        return expenses.amount || 0;
    } else {
        return 0;
    }
};
