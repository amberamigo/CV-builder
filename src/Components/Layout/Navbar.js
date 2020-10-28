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
          <Navbar className="nvbr" fixed="top" expand="md">
            <NavbarBrand href="/">
              <img src={process.env.PUBLIC_URL + '/BrandLogo4.png'} style={{height:40, width:120}} alt="Logo"></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="nv-toggler" />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  {auth.uid ? 
                  <Link className="nav-link" to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link> : 
                  <Link className="nav-link" to="/dashboard"><i className="fa fa-home"></i> Home</Link>
                }
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