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
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
import { signUp, signInGoogle, signInGithub, signInFacebook } from '../../Store/actions/authActions';
import { Redirect,Link } from 'react-router-dom';
import MessageDisplay from '../Layout/MessageDisplay';

class SignupForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            confirmpass : '',
            name : '',
            err : ''
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
        if(this.state.password !== this.state.confirmpass){
            this.setState({
                err : 'Passwords Don\'t Match'
            });
            return;
        }
        if(this.state.password==='' || this.state.email==='' || this.state.name===''){
            this.setState({
                err : 'Enter Email/Password/Name'
            });
            return;
        }
        this.props.signUp(this.state);
    }

    render() {

        const { auth } = this.props;

        if(auth.uid) return <Redirect to="/dashboard" />

        return (
            <div className="container">
                <br/>
                {(this.props.authError||this.state.err) ?
                 <MessageDisplay msg={this.props.authError ? this.props.authError : this.state.err} /> : null }
                <Form onSubmit={(e)=>this.handleSubmit(e)}>
                    <h3>Sign Up</h3>
                    <Row>
                        <Col md={10}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" autoComplete="off" aria-describedby="my-name" value={this.state.name} onChange={(e)=>this.handleChange(e)}></Input>
                                <FormText id="my-name">Enter Your Name</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
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
                        <Col md={5}>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" valid={this.state.password.length>=6} id="password" name="password" autoComplete="off" aria-describedby="my-password" value={this.state.password} onChange={(e)=>this.handleChange(e)}></Input>
                                <FormText id="my-email">Create A Password (Minimum Length = 6)</FormText>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label htmlFor="confirmpass">Confirm Password</Label>
                                <Input type="password" valid={this.state.confirmpass!==''&&this.state.password===this.state.confirmpass} id="confirmpass" name="confirmpass" autoComplete="off" aria-describedby="my-confirmpass" value={this.state.confirmpass} onChange={(e)=>this.handleChange(e)}></Input>
                                <FormText id="my-confirmpass">Confirm Your Created Password</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mx-auto">
                            <Button outline color="primary" type="submit" size="lg">Sign Up</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="text-left">
                            <Link to="/signin">
                                <Badge color="primary">
                                    Already Have Account, Log In Now
                                </Badge>
                            </Link>
                        </Col>
                        <Col></Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col md={4} className="mx-auto">
                            <GoogleLoginButton text="SignUp with Google" onClick={this.props.signInGoogle} />
                        </Col>
                        <Col md={4} className="mx-auto">
                            <FacebookLoginButton text="SignUp with Facebook" onClick={this.props.signInFacebook}/>
                        </Col>
                        <Col md={4} className="mx-auto"></Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mx-auto">
                            <GithubLoginButton text="SignUp with GitHub" onClick={this.props.signInGithub}/>
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
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser)),
        signInGoogle : () => dispatch(signInGoogle()),
        signInGithub : () => dispatch(signInGithub()),
        signInFacebook : () => dispatch(signInFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);