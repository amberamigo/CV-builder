import React, { Component } from 'react';
import ResumeList from '../ResumeMaker/ResumeList';
import LoadingScreen2 from '../Layout/LoadingScreen2';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const { resume, auth } = this.props;

        if(!auth.uid) return <Redirect to="/" />

        if(!this.props.auth.emailVerified) return <Redirect to="/verifyEmail" />

        if(!resume) return <LoadingScreen2/>

        return (
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12 col-md-10 mx-auto">
                      <ResumeList resume = {resume}/>
                  </div>
                  <div className="col-12 col-md-2"></div>
              </div>
          </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resume : state.firestore.ordered['usersResume'],
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props)=>[
        { 
            collection : 'resumes', 
            where : [['authorID', '==' , `${props.auth.uid}`]],
            limit : 10,
            storeAs : 'usersResume'
        }
    ])
    )(Dashboard);