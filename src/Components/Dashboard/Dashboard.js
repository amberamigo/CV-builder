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

        if(!resume) return <div><h3>Loading .....</h3></div>

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