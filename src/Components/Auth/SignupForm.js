import React, { Component } from 'react';
import {
    Form, 
    FormGroup,
    Input,
    Label,
    FormText,
    Button,
    Alert
    } from 'reactstrap';
import { connect } from 'react-redux';
import { signUp } from '../../Store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignupForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            firstName : '',
            lastName : ''
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
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" id="firstName" name="firstName" autoComplete="off" aria-describedby="my-firstName" value={this.state.firstName} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-firstName">Enter Your First Name</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" id="lastName" name="lastName" autoComplete="off" aria-describedby="my-lastName" value={this.state.lastName} onChange={(e)=>this.handleChange(e)}></Input>
                        <FormText id="my-lastName">Enter Your Last Name</FormText>
                    </FormGroup>
                    <Button outline color="primary" type="submit">Sign Up</Button>
                </Form>
                <Alert color="danger" isOpen={this.props.authError}>
                    {this.props.authError}
                </Alert>
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
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);