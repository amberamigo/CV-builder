import React from 'react';
import LoadingScreen from '../Layout/LoadingScreen';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
 
const ResumeDetails = (props) => {

    const { resume, auth } = props;

    if(!auth.uid) return <Redirect to="/"/>

    if(resume){
        return (
            <div>
                Resume Details for Resume - {props.match.params.id}
                <br/>
                Title - {resume.title}
                <br/>
                Description - {resume.description}
                <br/>
                Link - {resume.url} 
            </div>  
        );
    }else{
        return (
            <LoadingScreen/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const resumes = state.firestore.data.resumes;
    const resume = resumes ? resumes[id] : null;
    return {
        auth : state.firebase.auth,
        resume : resume
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection : 'resumes',
        }
    ])
    )
    (ResumeDetails);