import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { createResume, previewResume } from '../../../Store/actions/resumeActions';
import { connect } from 'react-redux';

class StagingArea extends Component {

    toNextStep = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    toPrevStep = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount(){
        
        this.props.changeValue('github','github.com/'+this.props.values.github);
        this.props.changeValue('linkedin','in.linkedin.com/'+this.props.values.linkedin);
    }

    render() {

        const { values } = this.props;

        var templateName = '';
        switch(values.templateNumber){
            case 1 : 
                    templateName = 'Beginner A';
                    break;
            case 2 : 
                    templateName = 'Professional A';
                    break;
            case 3 :
                    templateName = 'Professional B';
                    break;
            case 4 : 
                    templateName = 'Professional C';
                    break;
            default :
                    templateName = 'Professional A';
                    break;
        }

        return (
            <div className="card animated fadeInLeft">

                <div className="card-body">
                    <h3 className="card-title">Your Details</h3>
                    <hr />
                </div>
                <div className="container-fluid">
                    <Table hover responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Resume File</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Title</th>
                                <td>{values.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td>{values.description}</td>
                            </tr>
                            <tr>
                                <th scope="row">Template</th>
                                <td>{templateName}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Personal</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td>{values.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{values.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>{values.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row">LinkedIn ID</th>
                                <td>{values.linkedin}</td>
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td>{values.address}</td>
                            </tr>
                            <tr>
                                <th scope="row">GitHub ID</th>
                                <td>{values.github}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Education</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Institute Name 1</th>
                                <td>{values.edu_institute_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Name 1</th>
                                <td>{values.edu_course_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Year 1</th>
                                <td>{values.edu_course_year_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Score 1</th>
                                <td>{values.edu_course_score_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Institute Name 2</th>
                                <td>{values.edu_institute_name_2}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Name 2</th>
                                <td>{values.edu_course_name_2}</td>
                            </tr>
                            <tr>
                                <th scope="row">Year 2</th>
                                <td>{values.edu_course_year_2}</td>
                            </tr>
                            <tr>
                                <th scope="row">Score 2</th>
                                <td>{values.edu_course_score_2}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Experience</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Company Name</th>
                                <td>{values.exp_company_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Job Profile Name</th>
                                <td>{values.exp_job_profile_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Start Date</th>
                                <td>{values.exp_start_date_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">End Date</th>
                                <td>{values.exp_end_date_1}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Project</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Project Title 1</th>
                                <td>{values.project_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Description 1</th>
                                <td>{values.project_description_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Link 1</th>
                                <td>{values.project_link_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Title 2</th>
                                <td>{values.project_name_2}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Description 2</th>
                                <td>{values.project_description_2}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Link 2</th>
                                <td>{values.project_link_2}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Skills</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Skill 1</th>
                                <td>{values.skills_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Skill 2</th>
                                <td>{values.skills_name_2}</td>
                            </tr>
                            <tr>
                                <th scope="row">Skill 3</th>
                                <td>{values.skills_name_3}</td>
                            </tr>
                            
                            <tr>
                                <th scope="row">Skill 4</th>
                                <td>{values.skills_name_4}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Areas Of Interest</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Areas Of Interest 1</th>
                                <td>{values.areas_of_interest_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Areas Of Interest 2</th>
                                <td>{values.areas_of_interest_2}</td>
                            </tr>
                        </tbody>
                        <hr/>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Achievements</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Achievements 1</th>
                                <td>{values.achievements_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Achievements 2</th>
                                <td>{values.achievements_2}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="row text-center">
                    <div className="col-12 col-md-3 mx-auto my-auto">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-12 col-md-3 mx-auto my-auto">
                        <Button outline color="warning" onClick={()=>this.props.previewResume(values)} size="lg" block>Preview <i className="fa fa-file-text"></i></Button>
                    </div>
                    <div className="col-12 col-md-3 mx-auto my-auto">
                        <Button outline color="success" onClick={(e)=>{this.props.createResume(values);}} size="lg" block>Create <i className="fa fa-file-text"></i></Button>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createResume : (values) => dispatch(createResume(values)),
        previewResume : (values) => dispatch(previewResume(values))
    }
}

export default connect(null,mapDispatchToProps)(StagingArea);