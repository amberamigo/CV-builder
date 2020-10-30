import React, { Component } from 'react';
import ResumeFormUtil from './ResumeFormElements/ResumeFormUtil';
import { createResume } from '../../Store/actions/resumeActions';
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom';

class ResumeForm extends Component {

    render() {

        if(!this.props.auth.uid) return <Redirect to="/" />
        if(!this.props.auth.emailVerified) return <Redirect to="/verifyEmail" />

        return (
            
            <div>
                <ResumeFormUtil createResume={this.props.createResume}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createResume : (resume) => dispatch(createResume(resume))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeForm);