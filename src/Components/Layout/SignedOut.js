import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Tooltip
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';


//Signed Out Links for Navigation Bar


const SignedOut = (props) => {

    const [tooltip1Open, setTooltip1Open] = useState(false);
    const toggleTooltip1 = () => setTooltip1Open(!tooltip1Open);

    const [tooltip2Open, setTooltip2Open] = useState(false);
    const toggleTooltip2 = () => setTooltip2Open(!tooltip2Open);

    return (
        <Nav navbar>
            <NavItem>
                <NavLink className="nav-link" to="/signin" id="signInLink"><i className="fa fa-sign-in"></i> SignIn</NavLink>
            </NavItem>
            <Tooltip placement="auto" isOpen={tooltip1Open} target="signInLink" toggle={toggleTooltip1}>
                Sign In To Your Account
            </Tooltip>

            <NavItem>
                <NavLink className="nav-link" to="/signup" id="signUpLink"><i className="fa fa-user-plus"></i> SignUp</NavLink>
            </NavItem>
            <Tooltip placement="auto" isOpen={tooltip2Open} target="signUpLink" toggle={toggleTooltip2}>
                Create New Account
            </Tooltip>

        </Nav>
    )
}

export default SignedOut;