import React from 'react';
import {
    Nav,
    NavItem
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const SignedOut = (props) => {
    return (
        <Nav>
            <NavItem>
                <NavLink className="nav-link" to="/signin">SignIn</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/signup">SignUp</NavLink>
            </NavItem>
        </Nav>
    )
}

export default SignedOut;