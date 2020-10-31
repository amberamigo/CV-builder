import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Tooltip
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from '../../Store/actions/authActions';


//Signed In Links for Navigation Bar


const SignedIn = (props) => {

    const { profile } = props;

    const [tooltip1Open, setTooltip1Open] = useState(false);
    const toggleTooltip1 = () => setTooltip1Open(!tooltip1Open);

    const [tooltip2Open, setTooltip2Open] = useState(false);
    const toggleTooltip2 = () => setTooltip2Open(!tooltip2Open);

    const [tooltip3Open, setTooltip3Open] = useState(false);
    const toggleTooltip3 = () => setTooltip3Open(!tooltip3Open);

    return (
        <Nav navbar>
            <NavItem>
                <NavLink className="nav-link" to="/create" id="createLink"><i className="fa fa-pencil-square-o"></i> Create Resume</NavLink>
            </NavItem>
            <Tooltip placement="auto" isOpen={tooltip1Open} target="createLink" toggle={toggleTooltip1}>
                Create A New Resume For Your Job Application !! 
            </Tooltip>

            <NavItem>
                <NavLink className="nav-link" to="/" onClick={props.signOut} id="signOutLink"><i className="fa fa-sign-out"></i> SignOut</NavLink>
            </NavItem>
            <Tooltip placement="auto" isOpen={tooltip2Open} target="signOutLink" toggle={toggleTooltip2}>
                Sign Out From Your Account 
            </Tooltip>

            <NavItem>
                <NavLink to="/user" className="nav-link" id="userLink"><i className="fa fa-user-circle-o"></i> Hello {(profile) ? profile.name : 'User'} !!</NavLink>
            </NavItem>
            <Tooltip placement="auto" isOpen={tooltip3Open} target="userLink" toggle={toggleTooltip3}>
                Your User Account
            </Tooltip>
        </Nav>
    )
}

const mapStateToProps = (state) => {
    return {
        profile : state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedIn);