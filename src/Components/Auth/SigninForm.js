import React, { Component } from 'react';
import {
    Form, 
    FormGroup,
    Input,
    Label,
    FormText,
    Button
    } from 'reactstrap';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
import { signIn, signInGoogle } from '../../Store/actions/authActions';
import MessageDisplay from '../Layout/MessageDisplay';
import { Redirect } from 'react-router-dom';


class SigninForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
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
        this.props.signIn(this.state);
    }

    render() {

        const { auth } = this.props;

        if(auth.uid) return <Redirect to="/dashboard" />

        return (
            <div className="container">
                { this.props.authError ? <MessageDisplay msg={this.props.authError}/> : null }
                <Form onSubmit={(e)=>{this.handleSubmit(e);}}>
                    <h3>Sign In</h3>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" autoComplete="off" aria-describedby="my-email" value={this.state.email} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-email">Enter Email ID</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" autoComplete="off" aria-describedby="my-password" value={this.state.password} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-email">Enter Password</FormText>
                    </FormGroup>
                    <Button outline color="success" type="submit">Sign In</Button>
                    <GoogleLoginButton onClick={this.props.signInGoogle} />
                    <FacebookLoginButton/>
                    <GithubLoginButton/>
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
        signInGoogle : () => dispatch(signInGoogle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);