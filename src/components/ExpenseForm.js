/*global console */

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// // const date = new Date();
// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused: false,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            description: props.expense ? props.expense.description : '',
            errorMsg: '',
            isAmountError: false,
            isDescriptionError: false,
            note: props.expense ? props.expense.note : ''
        };
        // console.log('ExpenseForm constructor', { ...this.state });
    }

    onAmountChange = (event) => {
        const amount = event.target.value;

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({ note }));
    };

    onSubmit = (event) => {
        event.preventDefault();

        let errorMsg = '';
        let isAmountError = false;
        let isDescriptionError = false;
        if (!this.state.description) {
            isDescriptionError = true;
            errorMsg += ' a description';
            if (!this.state.amount) {
                isAmountError = true;
                errorMsg += ' and an amount.';
            }
        } else if (!this.state.amount) {
            isAmountError = true;
            errorMsg += ' an amount.';
        }

        if (errorMsg) {
            this.setState(() => ({
                isAmountError: isAmountError,
                isDescriptionError: isDescriptionError,
                errorMsg: 'Please provide' + errorMsg
            }));
        } else {
            this.setState(() => ({
                isAmountError: false,
                isDescriptionError: false,
                errorMsg: ''
            }));

            this.props.onSubmit({
                amount: Math.floor(parseFloat(this.state.amount) * 100),
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description,
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.errorMsg && <p className="error-msg">{this.state.errorMsg}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        className={
                            this.state.isDescriptionError ? 'text-input error' : 'text-input'
                        }
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className={
                            'text-input' + this.state.isAmountError
                                ? 'text-input error'
                                : 'text-input'
                        }
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button className="button">{this.props.action} Expense</button>
                </form>
            </div>
        );
    }
}
