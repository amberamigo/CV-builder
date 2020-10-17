import React, { Component } from 'react';
import { createResume } from '../../Store/actions/resumeActions';
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom';

class ResumeForm extends Component {

    render() {

        if(!this.props.auth.uid) return <Redirect to="/" />

        const resume = {};
        return (
            <div>
                <button onClick={(e)=>{e.preventDefault(); this.props.createResume(resume)}}>Create</button>
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