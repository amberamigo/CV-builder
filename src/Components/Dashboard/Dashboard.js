import React, { Component } from 'react';
import ResumeList from '../ResumeMaker/ResumeList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const { resume, auth } = this.props;

        if(!auth.uid) return <Redirect to="/" />

        return (
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12 col-md-6">
                      <ResumeList resume = {resume}/>
                  </div>
                  <div className="col-12 col-md-5 offset-md-1"></div>
              </div>
          </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resume : state.firestore.data.resumes,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection : 'resumes',
        }
    ])
    )(Dashboard);