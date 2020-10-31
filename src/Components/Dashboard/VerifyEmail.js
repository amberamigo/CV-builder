import React, { Component } from 'react';
import { Card, CardImg, Row, Col, CardBody, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { verifyEmailLink } from '../../Store/actions/authActions';
import MessageDisplay from '../Layout/MessageDisplay';

//Email Verification Notification

class VerifyEmail extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.verifyEmailLink();
    }

    render() {
        if(this.props.auth.emailVerified) return <Redirect to="/user" />
        return (
            <div className="App pt-3 mt-3">
                <div className="container col-lg-6 mx-auto">
                {(this.props.authErr||this.props.authMsg) ? <MessageDisplay msg={this.props.authErr ? this.props.authErr:this.props.authMsg} /> : null}
                    <Card className="py-3 my-3">
                        <Row>
                            <Col md={4} className="mx-auto"></Col>
                            <Col md={4} className="mx-auto">
                                <CardImg src="/assets/notverified11.png" style={{maxHeight:200, maxWidth:200, minHeight:75, minWidth:75, paddingLeft:'20%'}} alt="Error Image"></CardImg>
                            </Col>
                            <Col md={4} className="mx-auto"></Col>
                        </Row>
                        <Row className="text-center">
                            <Col md={3}></Col>
                            <Col md={6} className="mx-auto">
                                <CardBody>
                                    <h3>Email Not Verified</h3>
                               </CardBody>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                        <Row className="text-center">
                            <Col md={3}></Col>
                            <Col md={6} className="mx-auto">
                                <Badge color="success" pill className="btn btn-success" onClick={(e)=>{this.handleSubmit(e)}}>
                                    <h4>Send Email Verification Link</h4>
                                </Badge>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                    </Card>
                </div>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        authMsg : state.auth.authMsg,
        authErr : state.auth.authErr
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        verifyEmailLink : () => {dispatch(verifyEmailLink())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);