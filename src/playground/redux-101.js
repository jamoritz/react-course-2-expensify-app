/*global console */

import { createStore } from 'redux';

// // Destructuring an object argument into constituent parts:
// const add = ({ a = 0, b = 0 }, c) => {
//     return a + b + c;
// };
// console.log(add({ a: 1, b: 12 }, 100));

// Action generators - functions that return action objects

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// // Use object argument destructuring to simplify:
// const incrementCount = ({incrementBy = 1} = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: incrementBy === 'number' ? incrementBy : 1
// });

// Use object argument destructuring to simplify:
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

// const decrementCount = (payload = {}) => ({
//     type: 'DECREMENT',
//     decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
// });

// Use object argument destructuring to simplify:
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// const setCount = (payload = {}) => ({
//     type: 'SET',
//     count: typeof payload.count === 'number' ? payload.count : 0
// });

// Note: count is required here
const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const defaultState = { count: 0 };

// Reducers - rules:
// 1. Reducers are pure functions - the output is purely defined by the input.
// 2. Never change state or action

const countReducer = (state = defaultState, action) => {
    if (action) {
        switch (action.type) {
            case 'INCREMENT':
                // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
                return {
                    count: state.count + action.incrementBy
                };
            case 'DECREMENT':
                // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
                return {
                    count: state.count - action.decrementBy
                };
            case 'RESET':
                return { count: 0 };
            case 'SET':
                return { count: action.count };
            default:
                return state;
        }
    } else {
        return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
//
// // unsubscribe();
//
store.dispatch(decrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(setCount({ count: 101 }));
// // Note: setCount is very error prone:
// store.dispatch(setCount({ county: 101 }));
