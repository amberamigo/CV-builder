import React, { Component } from 'react';
import {
    Form, 
    FormGroup,
    Input,
    Label,
    FormText,
    Button,
    Row,
    Col,
    Badge
    } from 'reactstrap';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
import { signIn, signInGoogle, signInGithub, signInFacebook, passwordResetLink } from '../../Store/actions/authActions';
import MessageDisplay from '../Layout/MessageDisplay';
import { Redirect, Link } from 'react-router-dom';


// SignIn Page Component with SignIn Methods and Forms

class SigninForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            errr : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.email === '' || this.state.password === ''){
            this.setState({
                errr : 'Enter Your Email / Password' 
            });
        }
        this.props.signIn(this.state);
    }

    render() {

        const { auth } = this.props;

        if(auth.uid) return <Redirect to="/dashboard" />

        return (
            <div className="container">
                <br/>
                { (this.props.authError||this.state.errr) ? <MessageDisplay msg={this.props.authError? this.props.authError : this.state.errr}/> : null }
                <Form onSubmit={(e)=>{this.handleSubmit(e);}}>
                    <h3>Sign In</h3>
                    <Row>
                        <Col md={10}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" autoComplete="off" aria-describedby="my-email" value={this.state.email} onChange={(e)=>this.handleChange(e)}></Input>
                                <FormText id="my-email">Enter Email ID</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" autoComplete="off" aria-describedby="my-password" value={this.state.password} onChange={(e)=>this.handleChange(e)}></Input>
                                <FormText id="my-email">Enter Password</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mx-auto">
                            <Button outline color="success" type="submit" size="lg">Sign In</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="text-left">
                            <Link to="/signup">
                                <Badge color="primary">
                                    Don't Have Account, Create One !
                                </Badge>
                            </Link>
                        </Col>
                        <Col md={6} className="text-left">
                            <Badge 
                                color="warning" 
                                className="btn btn-warning" 
                                onClick={ () => {
                                    this.props.passwordResetLink(this.state.email);
                                }}
                                >
                                Forgot Password ?
                            </Badge>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col md={4} className="mx-auto">
                            <GoogleLoginButton text="SignIn with Google" onClick={this.props.signInGoogle} />
                        </Col>
                        <Col md={4} className="mx-auto">
                            <FacebookLoginButton text="SignIn with Facebook" onClick={this.props.signInFacebook}/>
                        </Col>
                        <Col md={4} className="mx-auto"></Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mx-auto">
                            <GithubLoginButton text="SignIn with GitHub" onClick={this.props.signInGithub}/>
                        </Col>
                        <Col md={4} className="mx-auto"></Col>
                        <Col md={4} className="mx-auto"></Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => dispatch(signIn(creds)),
        signInGoogle : () => dispatch(signInGoogle()),
        signInGithub : () => dispatch(signInGithub()),
        signInFacebook : () => dispatch(signInFacebook()),
        passwordResetLink : (emailId) => dispatch(passwordResetLink(emailId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);