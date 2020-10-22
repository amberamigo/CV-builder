import React, { Component } from 'react';
import {
    Form, 
    FormGroup,
    Input,
    Label,
    FormText,
    Button
    } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
import { signUp, signInGoogle } from '../../Store/actions/authActions';
import { Redirect } from 'react-router-dom';
import MessageDisplay from '../Layout/MessageDisplay';

class SignupForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            name : ''
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
        this.props.signUp(this.state);
    }

    render() {

        const { auth } = this.props;

        if(auth.uid) return <Redirect to="/dashboard" />

        return (
            <div className="container">
                {this.props.authError ? <MessageDisplay msg={this.props.authError} /> : null }
                <Form onSubmit={(e)=>this.handleSubmit(e)}>
                    <h3>Sign Up</h3>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" autoComplete="off" aria-describedby="my-email" value={this.state.email} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-email">Enter Email ID</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" autoComplete="off" aria-describedby="my-password" value={this.state.password} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-email">Create A Password (Minimum Length = 6)</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name" autoComplete="off" aria-describedby="my-name" value={this.state.name} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-name">Enter Your Name</FormText>
                    </FormGroup>
                    <Button outline color="primary" type="submit">Sign Up</Button>
                </Form>
                <GoogleLoginButton onClick={this.props.signInGoogle} />
                <FacebookLoginButton/>
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
        signInGoogle : () => dispatch(signInGoogle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);