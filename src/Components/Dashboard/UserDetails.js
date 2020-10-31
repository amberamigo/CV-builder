import React, { Component } from 'react';
import LoadingScreen2 from '../Layout/LoadingScreen2';
import { connect } from 'react-redux';
import { Card, CardImg, Row, Col, CardBody, CardText, Badge } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

//User Details Component for showing Details of Logged in User

class UserDetails extends Component {

    render() {
        const auth = this.props.auth;

        if(!auth.uid){
            return <LoadingScreen2/>
        }
        else if(auth.emailVerified){
            return (
                <div className="App pt-3 mt-3">
                    <div className="container col-lg-8 mx-auto">
                        <Card>
                            <Row>
                                <Col md={4} className="mx-auto"></Col>
                                <Col md={4} className="mx-auto">
                                    { !auth.photoURL ?
                                    <CardImg 
                                        style = {{minHeight:50, minWidth:50, maxHeight:200, maxWidth:200, marginLeft:'20%', paddingTop :'5%', alignContent:'center'}}
                                        src="https://firebasestorage.googleapis.com/v0/b/resume-maker-4cf9b.appspot.com/o/commons%2FprofileDefault.png?alt=media&token=55c9f159-686c-45bc-adbc-b0ae95948e78">
    
                                    </CardImg>
                                    :
                                    <CardImg 
                                        style = {{minHeight:50, minWidth:50, maxHeight:200, maxWidth:200, marginLeft:'20%', alignContent:'center'}}
                                        src={auth.photoURL}>
    
                                    </CardImg>
                                    }
                                </Col>
                                <Col md={4} className="mx-auto"></Col>
                            </Row>
                            <Row>
                                <Col md={2} className="mx-auto"></Col>
                                <Col md={8} className="mx-auto text-center">
                                    <CardBody>
                                        <CardText>
                                            <h3>{auth.displayName}</h3> 
                                        </CardText>
                                        <CardText>
                                            <h3>{auth.email}</h3> 
                                        </CardText>
                                        <CardText>
                                            <h4>Last Activity - {new Date(auth.lastLoginAt*1).toDateString()}</h4> 
                                        </CardText>
                                        <Link to="/dashboard">
                                            <h3><Badge color="primary" pill>Your Dashboard</Badge></h3>
                                        </Link>
                                        <Link to="/create">
                                            <h3><Badge color="success" pill>Create Resume</Badge></h3>
                                        </Link>
                                    </CardBody>
                                </Col>
                                <Col md={2} className="mx-auto"></Col>
                            </Row>
                        </Card>
                    </div>
                    <br />
                </div>
            );
        } 
        else{
            return <Redirect to="/verifyEmail"/>
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(UserDetails);