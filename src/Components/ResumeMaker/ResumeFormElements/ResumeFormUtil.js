import React, { Component } from 'react';
import PersonalDetailsForm from './PersonalDetails';
import EducationDetailsForm from './EducationDetails';
import ProjectNSkillDetailsForm from './ProjectNSkillDetails';
import AoiNAchievementsDetailsForm from './AoiNAchievements';
import TemplateSelectionForm from './TemplateSelection';
import StagingArea from './StagingArea';

class ResumeFormUtil extends Component {

    constructor(props){
        super(props);

        this.state = {
            step : 1,

            templateNumber : 1,

            firstname : '',
            lastname : '',
            email : '',
            phone : '',
            linkedin : '',
            address : '',

            edu_fields : 2,
            edu_institute_name_1 : '',
            edu_course_name_1 : '',
            edu_course_year_1 : '',
            edu_course_score_1 : '',
            edu_institute_name_2 : '',
            edu_course_name_2 : '',
            edu_course_year_2 : '',
            edu_course_score_2 : '',

            project_fields : 1,
            project_name : '',
            project_description : '',
            project_link : '',

            skills_fields : 3,
            skills_name_1 : '',
            skills_name_2 : '',
            skills_name_3 : '',

            areas_of_interest_fields : 2,
            areas_of_interest_1 : '',
            areas_of_interest_2 : '',

            achievements_fields : 2,
            achievements_1 : '',
            achievements_2 : '',
            
            isSubmitted : false 
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    formOnSubmit = () => {
        const { isSubmitted } = this.state;
        this.setState({
            [isSubmitted] : true
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    selectTemplate = (n) => {
        if(n<1 || n>4) return;
        this.setState({
            templateNumber : n
        })
    }

    render() {
        switch(this.state.step){
            case 1 : 
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto">
        
                            <TemplateSelectionForm
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                selectTemplate={this.selectTemplate}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 2 : 
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto">
        
                            <PersonalDetailsForm
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 3 : 
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto">
        
                            <EducationDetailsForm
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 4 : 
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto">
        
                            <ProjectNSkillDetailsForm
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 5 : 
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto">
        
                            <AoiNAchievementsDetailsForm
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );
            
            case 6 :
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto">
        
                            <StagingArea
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                            />
                        </div>
                        <br />
                    </div>
                );

            default : 
                return (
                    <div>Error :/</div>
                );
        }
    }
}

export default ResumeFormUtil;
