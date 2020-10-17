import authReducers from './authReducers';
import resumeReducers from './resumeReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducers = combineReducers({
    auth : authReducers,
    resume : resumeReducers,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducers;