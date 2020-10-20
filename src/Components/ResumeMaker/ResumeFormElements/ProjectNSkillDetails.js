import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,  FormText, Button } from 'reactstrap';

class ProjectNSkillDetailsForm extends Component {

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
                    <h3 className="card-title">Projects-</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label htmlFor="project_name">Project Title</Label>
                            <Input 
                                type = "text" 
                                id = "project_name"
                                name = "project_name"
                                autoFocus = "on"
                                autoComplete = "off"
                                aria-describedby = "project_name-text"
                                value = {values.isSubmitted ? '' : values.project_name}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="project_name-text">Enter Project Title</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="project_description">Description</Label>
                            <Input 
                                type = "text" 
                                id = "project_description"
                                name = "project_description"
                                autoComplete = "off"
                                aria-describedby = "project_desc-text"
                                value = {values.isSubmitted ? '' : values.project_description}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="edu_institute_name_1-text">Enter Project Description</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="project_link">Project Link</Label>
                            <Input 
                                type = "url" 
                                id = "project_link"
                                name = "project_link"
                                autoComplete = "off"
                                aria-describedby = "project_link-text"
                                value = {values.isSubmitted ? '' : values.project_link}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="project_link-text">Provide Link For Project</FormText>
                        </FormGroup>
                    </Form>
                </div>

                <div className="card-body">
                    <h3 className="card-title">Skills-</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label htmlFor="skills_name_1">Skill - 1</Label>
                            <Input 
                                type = "text" 
                                id = "skills_name_1"
                                name = "skills_name_1"
                                autoComplete = "off"
                                aria-describedby = "skills_name_1-text"
                                value = {values.isSubmitted ? '' : values.skills_name_1}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="skills_name_1-text">Enter Skill - 1</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="skills_name_2">Skill - 2</Label>
                            <Input 
                                type = "text" 
                                id = "skills_name_2"
                                name = "skills_name_2"
                                autoComplete = "off"
                                aria-describedby = "skills_name_2-text"
                                value = {values.isSubmitted ? '' : values.skills_name_2}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="skills_name_2-text">Enter Skill - 2</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="skills_name_3">Skill - 3</Label>
                            <Input 
                                type = "text" 
                                id = "skills_name_3"
                                name = "skills_name_3"
                                autoComplete = "off"
                                aria-describedby = "skills_name_3-text"
                                value = {values.isSubmitted ? '' : values.skills_name_3}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="skills_name_3-text">Enter Skill - 3</FormText>
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

export default ProjectNSkillDetailsForm;