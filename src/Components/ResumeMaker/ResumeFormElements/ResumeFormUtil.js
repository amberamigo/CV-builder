import React, { Component } from 'react';
import { connect } from 'react-redux';
import PersonalDetailsForm from './PersonalDetails';
import EducationDetailsForm from './EducationDetails';
import ProjectNSkillDetailsForm from './ProjectNSkillDetails';
import AoiNAchievementsDetailsForm from './AoiNAchievements';
import TemplateSelectionForm from './TemplateSelection';
import StagingArea from './StagingArea';
import ResumeScrapForm from './ResumeScrapForm';
import { FadeTransform } from 'react-animation-components';

class ResumeFormUtil extends Component {

    constructor(props){
        super(props);

        this.state = {
            step : 0,

            templateNumber : 1,
            title : '',
            description : '',

            name : '',
            email : '',
            phone : '',
            linkedin : '',
            address : '',
            github : '',

            edu_fields : 2,
            edu_institute_name_1 : '',
            edu_course_name_1 : '',
            edu_course_year_1 : '',
            edu_course_score_1 : '',
            edu_institute_name_2 : '',
            edu_course_name_2 : '',
            edu_course_year_2 : '',
            edu_course_score_2 : '',

            exp_fields : 1,
            exp_company_name_1 : '',
            exp_job_profile_1 : '',
            exp_start_date_1 : '',
            exp_end_date_1 : '',

            project_fields : 2,
            project_name_1 : '',
            project_description_1 : '',
            project_link_1 : '',
            project_name_2 : '',
            project_description_2 : '',
            project_link_2 : '',

            skills_fields : 4,
            skills_name_1 : '',
            skills_name_2 : '',
            skills_name_3 : '',
            skills_name_4 : '',

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
        if(step>=6) return;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        if(step<=0) return;
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

    changeValue = (key,value) => {
        this.setState({
            [key] : value
        });
    }

    selectTemplate = (n) => {
        if(n<1 || n>4) return;
        this.setState({
            templateNumber : n
        })
    }

    componentDidMount(){
        if(this.props.userProfile){
            if(this.props.userProfile.email){
                this.setState({
                    name : this.props.userProfile.displayName
                });
            }
            if(this.props.userProfile.email){
                this.setState({
                    email : this.props.userProfile.email
                });
            }
            if(this.props.userProfile.phoneNumber){
                this.setState({
                    phone : this.props.userProfile.phoneNumber
                });
            }
        }
    }

    render() {
        switch(this.state.step){
            case 0 : 
                return (
                    <FadeTransform
                        duration={200} 
                        in
                        transformProps={{
                            exitTransform: 'translateX(100px)'
                        }}
                        fadeProps={{
                            enterOpacity: 0.9,
                        }}
                    >
                    <div className="App pt-3 mt-3">
                        <div className="container col-lg-8 mx-auto">
                            <TemplateSelectionForm
                                values={this.state}
                                handleChange={this.handleChange}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                selectTemplate={this.selectTemplate}
                            />
                        </div>
                        <br />
                    </div>
                    </FadeTransform>
                );
            
            case 1 : 
                return (
                    <div className="App pt-3 mt-3">
                        <div className="container col-lg-8 mx-auto">
        
                            <ResumeScrapForm
                                user={this.props.userProfile.uid ? this.props.userProfile.uid : Math.round(Math.random().toPrecision(5)*10000)} 
                                values={this.state}
                                changeValue={this.changeValue}
                                handleChange={this.handleChange}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 2 : 
                return (
                    <div className="App pt-3 mt-3">
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
                    <div className="App pt-3 mt-3">
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
                    <div className="App pt-3 mt-3">
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
                    <div className="App pt-3 mt-3">
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
                    <div className="App pt-3 mt-3">
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

const mapStateToProps = (state) => {
    return {
        userProfile : state.firebase.auth
    }
}

export default connect(mapStateToProps,null)(ResumeFormUtil);
