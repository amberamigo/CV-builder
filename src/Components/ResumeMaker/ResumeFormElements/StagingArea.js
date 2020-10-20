import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
                    Template -   {values.templateNumber} <br/><br/>
                    First Name - {values.firstname} <br/>
                    Last Name -  {values.lastname} <br/>
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
                    <div className="col-6 col-md-4">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4">
                        <Button outline color="danger" onClick={(e)=>this.toNextStep(e)} size="lg" block disabled>Next <i className="fa fa-chevron-circle-right"></i></Button>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default StagingArea;