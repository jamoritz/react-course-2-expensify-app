/*global console */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <nav className="nav">
            <NavLink to="/" className="nav__link" activeClassName="is-active" exact={true}>
                Dashboard
            </NavLink>
            <NavLink to="/create" className="nav__link" activeClassName="is-active">
                Create Expense
            </NavLink>
            <button onClick={startLogout}>Logout</button>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
