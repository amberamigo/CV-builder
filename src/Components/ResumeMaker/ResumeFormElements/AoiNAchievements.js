import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,  FormText, Button } from 'reactstrap';

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
                    <h3 className="card-title">Areas Of Interest-</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
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
                            <FormText id="skills_name_1-text">Enter Areas Of Interest - 1</FormText>
                        </FormGroup>
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
                            <FormText id="skills_name_2-text">Enter Areas Of Interest - 2</FormText>
                        </FormGroup>
                    </Form>
                </div>

                <div className="card-body">
                    <h3 className="card-title">Achievements-</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
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

export default AoiNAchievementsDetailsForm;