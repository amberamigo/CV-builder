import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';

const NavBar = (props)=>{
    const { auth } = props;
    const links = auth.uid ? <SignedIn/> : <SignedOut/> ; 
 
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
          <Navbar fixed="top" color="dark" dark expand="md">
            <NavbarBrand href="/">Resume-Maker</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/dashboard"><i className="fa fa-home"></i> Home</Link>
                </NavItem>
              </Nav>
              {links}
            </Collapse>
          </Navbar>
        </div>
      );  
        
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavBar);