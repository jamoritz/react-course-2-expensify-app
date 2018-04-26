/*global console */

import authReducer from '../../reducers/auth';

const authReducerDefaultState = { uid: 'anything' };

test('should set uid on login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer(authReducerDefaultState, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid on logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(authReducerDefaultState, action);
    expect(state.uid).toBeUndefined();
});
