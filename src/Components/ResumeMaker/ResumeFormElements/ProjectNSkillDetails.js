import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input,  FormText, Button, Row, Col } from 'reactstrap';

class ProjectNSkillDetailsForm extends Component {

    fetchGitHub = (e) => {
        e.preventDefault();
        if(this.props.values.githubid === ''){
            alert('Provide Your GitHub ID');
            return;
        }
        const githubid = this.props.values.githubid;
        axios.get(`https://api.github.com/users/${githubid}/projects`,{
            headers : {
                'Accept' : 'application/vnd.github.inertia-preview+json'
            },
        })
        .then((resp)=>{
            if(resp.status === 200 && resp.data){
                try{
                    const date = new Date(resp.data[0].created_at).toDateString();
                    const e1 = {
                        target : {
                            name : 'project_name',
                            value : resp.data[0].name
                        }
                    }
                    const e2 = {
                        target : {
                            name : 'project_description',
                            value : 'Created On '+date
                        }
                    }
                    const e3 = {
                        target : {
                            name : 'project_link',
                            value : resp.data[0].html_url
                        }
                    }
                    
                    this.props.handleChange(e1);
                    this.props.handleChange(e2);
                    this.props.handleChange(e3);
                }catch(err){
                    alert('Error In Fetching Project Details');
                }
                return;
            }else{
                alert('Error In Fetching Project Details');
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }

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
                    <h3 className="card-title">Projects</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <Row>
                            <Col md={6} className="mx-auto">
                                <FormGroup>
                                    <Label htmlFor="githubid">Fetch Project Details From <i className="fa fa-github"></i> GitHub Projects</Label>
                                    <Input 
                                        type = "url" 
                                        id = "githubid"
                                        name = "githubid"
                                        autoComplete = "off"
                                        placeholder="Your GitHub UserID"
                                        aria-describedby = "githubid-text"
                                        value = {values.isSubmitted ? '' : values.githubid}
                                        onChange = {(e)=>handleChange(e)}
                                    />
                                    <FormText htmlFor="githubid-text">Eg.- For github.com/UserID, Enter Only 'UserID'</FormText>
                                </FormGroup>
                            </Col>
                            <Col md={4} className="mx-auto my-auto">
                                <Button color="dark" onClick={(e)=>{this.fetchGitHub(e)}} block><i className="fa fa-github"></i> Fetch</Button>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md={6}>
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
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="mx-auto">
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
                            </Col>
                            <Col md={6} className="mx-auto">
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
                            </Col>
                        </Row>
                    </Form>
                </div>

                <div className="card-body">
                    <h3 className="card-title">Skills</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <Row>
                            <Col className="mx-auto">
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
                            </Col>
                            <Col className="mx-auto">
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
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
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

export default ProjectNSkillDetailsForm;