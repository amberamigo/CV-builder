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
    render() {
        const { values } = this.props;
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
                                <td>No. {values.templateNumber}</td>
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
                                <th scope="row">Institute Name</th>
                                <td>{values.edu_institute_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Name</th>
                                <td>{values.edu_course_name_1}</td>
                            </tr>
                            <tr>
                                <th scope="row">Year</th>
                                <td>{values.edu_course_score_1}</td>
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
                                <th scope="row">Project Title</th>
                                <td>{values.project_name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Description</th>
                                <td>{values.project_description}</td>
                            </tr>
                            <tr>
                                <th scope="row">Project Link</th>
                                <td>{values.project_link}</td>
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
                        <Button outline color="success" onClick={()=>this.props.createResume(values)} size="lg" block>Create <i className="fa fa-file-text"></i></Button>
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