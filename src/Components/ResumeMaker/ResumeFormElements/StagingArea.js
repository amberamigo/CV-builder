import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
                <div className="container-fluid text-center">
                    Title -      {values.title} <br/>
                    Description -{values.description} <br/>
                    Template -   {values.templateNumber} <br/><br/>
                    Name -       {values.name} <br/>
                    Email -      {values.email} <br/>
                    Phone -      {values.phone} <br/>
                    LinkedIn ID  - {values.linkedin} <br/><br/>
                    Institute -    {values.edu_institute_name_1} <br/>
                    Course -       {values.edu_course_name_1} <br/>
                    Year -         {values.edu_course_year_1} <br/>
                    Marks -        {values.edu_course_score_1} <br/><br/>
                    Project -      {values.project_name} <br/>
                    Project Desc - {values.project_description} <br/>
                    Project Link - {values.project_link} <br/>
                    Skill 1 -      {values.skills_name_1} <br/>
                    Skill 2 -      {values.skills_name_2} <br/>
                    Skill 3 -      {values.skills_name_3} <br/><br/>
                    Area Of Interest 1 - {values.areas_of_interest_1} <br/>
                    Area Of Interest 2 - {values.areas_of_interest_2} <br/><br/>
                    Achievements 1 -     {values.achievements_1} <br/>
                    Achievements 2 -     {values.achievements_2} <br/><br/>
                </div>
                <div className="row text-center">
                    <div className="col-12 col-md-4 mx-auto">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-12 col-md-4 mx-auto">
                        <Button outline color="warning" onClick={()=>this.props.previewResume(values)} size="lg" block>Preview <i className="fa fa-file-text"></i></Button>
                    </div>
                    <div className="col-12 col-md-4 mx-auto">
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