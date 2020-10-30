import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,  FormText, Button, Row, Col } from 'reactstrap';

class AoiNAchievementsDetailsForm extends Component {

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
                    <h3 className="card-title">Experience</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="exp_company_name_1">Company Name</Label>
                                    <Input 
                                        type = "text" 
                                        id = "exp_company_name_1"
                                        name = "exp_company_name_1"
                                        autoComplete = "off"
                                        aria-describedby = "exp_company_name_1-text"
                                        value = {values.isSubmitted ? '' : values.exp_company_name_1}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="exp_company_name_1-text">Enter Name of Company/Organisation</FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="exp_job_profile_1">Profile Name</Label>
                                    <Input 
                                        type = "text" 
                                        id = "exp_job_profile_1"
                                        name = "exp_job_profile_1"
                                        autoComplete = "off"
                                        aria-describedby = "exp_job_profile_1-text"
                                        value = {values.isSubmitted ? '' : values.exp_job_profile_1}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="exp_job_profile_1-text">Enter Job Profile Name</FormText>
                                </FormGroup>
                            </Col>
                        </Row> 
                        <Row>
                            <Col className="mx-auto">
                                <FormGroup>
                                    <Label htmlFor="exp_start_date_1">Starting Date</Label>
                                    <Input 
                                        type = "date" 
                                        id = "exp_start_date_1"
                                        name = "exp_start_date_1"
                                        autoComplete = "off"
                                        aria-describedby = "exp_start_date_1-text"
                                        value = {values.isSubmitted ? '' : values.exp_start_date_1}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="exp_start_date_1-text">Enter Starting Date</FormText>
                                </FormGroup>
                            </Col>
                            <Col className="mx-auto">
                                <FormGroup>
                                    <Label htmlFor="exp_end_date_1">Ending Date</Label>
                                    <Input 
                                        type = "date" 
                                        id = "exp_end_date_1"
                                        name = "exp_end_date_1"
                                        autoComplete = "off"
                                        aria-describedby = "exp_end_date_1-text"
                                        value = {values.isSubmitted ? '' : values.exp_end_date_1}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="exp_end_date_1-text">Enter Ending Date</FormText>
                                </FormGroup>
                            </Col>
                        </Row>                    
                    </Form>
                </div>

                <div className="card-body">
                    <h3 className="card-title">Areas Of Interest</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="areas_of_interest_1">Areas Of Interest - 1</Label>
                                    <Input 
                                        type = "text" 
                                        id = "areas_of_interest_1"
                                        name = "areas_of_interest_1"
                                        autoComplete = "off"
                                        aria-describedby = "areas_of_interest_1-text"
                                        value = {values.isSubmitted ? '' : values.areas_of_interest_1}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="areas_of_interest_1-text">Enter Areas Of Interest - 1</FormText>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="areas_of_interest_2">Areas Of Interest - 2</Label>
                                    <Input 
                                        type = "text" 
                                        id = "areas_of_interest_2"
                                        name = "areas_of_interest_2"
                                        autoComplete = "off"
                                        aria-describedby = "areas_of_interest_2-text"
                                        value = {values.isSubmitted ? '' : values.areas_of_interest_2}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="areas_of_interest_2-text">Enter Areas Of Interest - 2</FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <div className="card-body">
                    <h3 className="card-title">Achievements</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="achievements_1">Achievement - 1</Label>
                                    <Input 
                                        type = "text" 
                                        id = "achievements_1"
                                        name = "achievements_1"
                                        autoComplete = "off"
                                        aria-describedby = "achievements_1-text"
                                        value = {values.isSubmitted ? '' : values.achievements_1}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="achievements_1-text">Enter Achievement - 1</FormText>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="achievements_2">Achievement - 2</Label>
                                    <Input 
                                        type = "text" 
                                        id = "achievements_2"
                                        name = "achievements_2"
                                        autoComplete = "off"
                                        aria-describedby = "achievements_2-text"
                                        value = {values.isSubmitted ? '' : values.achievements_2}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText id="achievements_2-text">Enter Achievement - 2</FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <div className="row text-center">
                    <div className="col-6 col-md-4 mx-auto">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4 mx-auto">
                        <Button outline color="danger" onClick={(e)=>this.toNextStep(e)} size="lg" block>Next <i className="fa fa-chevron-circle-right"></i></Button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default AoiNAchievementsDetailsForm;