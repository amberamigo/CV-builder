import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText,  FormText, Button } from 'reactstrap';

class PersonalDetailsForm extends Component {

    toNextStep = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    toPrevStep = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">

                <div className="card-body">
                    <h3 className="card-title">Personal Details</h3>
                    <hr />
                </div>
                <div className="container-fluid">
                    <Form>
                        <FormGroup>
                            <Label htmlFor="firstname">First Name</Label>
                            <Input 
                                type = "text" 
                                id = "firstname"
                                name = "firstname"
                                autoFocus = "on"
                                autoComplete = "off"
                                aria-describedby = "firstname-text"
                                value = {values.isSubmitted ? '' : values.firstname}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="firstname-text">Enter Your First Name</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input 
                                type = "text" 
                                id = "lastname"
                                name = "lastname"
                                autoComplete = "off"
                                aria-describedby = "lastname-text"
                                value = {values.isSubmitted ? '' : values.lastname}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="lastname-text">Enter Your Last Name</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                type = "email" 
                                id = "email"
                                name = "email"
                                autoComplete = "off"
                                aria-describedby = "email-text"
                                value = {values.isSubmitted ? '' : values.email}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="email-text">Enter Your Email ID</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="linkedin">LinkedIn ID</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>in.linkedin.com/</InputGroupText>
                                </InputGroupAddon>
                                <Input 
                                    type = "url" 
                                    id = "linkedin"
                                    name = "linkedin"
                                    autoComplete = "off"
                                    aria-describedby = "linkedin-text"
                                    value = {(values.isSubmitted ? '' : values.linkedin)}
                                    onChange = {(e)=>handleChange(e)}
                                />
                            </InputGroup>
                            <FormText id="linkedin-text">Provide Your LinkedIn ID</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone">Mobile Phone Number</Label>
                            <Input 
                                type = "tel" 
                                id = "phone"
                                name = "phone"
                                autoComplete = "off"
                                aria-describedby = "phone-text"
                                value = {values.isSubmitted ? '' : values.phone}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="phone-text">Enter Your Mobile Phone Number</FormText>
                        </FormGroup>
                    </Form>
                </div>
                <div className="row text-center">
                    <div className="col-6 col-md-4">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4">
                        <Button outline color="danger" onClick={(e)=>this.toNextStep(e)} size="lg" block>Next <i className="fa fa-chevron-circle-right"></i></Button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default PersonalDetailsForm;