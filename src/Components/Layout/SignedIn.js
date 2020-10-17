import React from 'react';
import {
    Nav,
    NavItem
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from '../../Store/actions/authActions';

const SignedIn = (props) => {

    const { profile } = props;

    return (
        <Nav>
            <NavItem>
                <NavLink className="nav-link" to="/create">Create</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/signin" onClick={props.signOut}>SignOut</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/" className="nav-link">Hello {(profile) ? profile.firstName : 'User'} !!</NavLink>
            </NavItem>
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