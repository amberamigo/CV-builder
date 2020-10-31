//import fb from '../../Config/fireConfig'; 

// Functions related to Authentication Processes


//SignIngoogle
export const signInGoogle = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                name : resp.user.displayName
            });
        })
        .then(()=>{
            dispatch({type : 'LOGIN_SUCCESS'});
        })
        .catch((err)=>{
            dispatch({type : 'LOGIN_ERR', error : err});
        });
    }
}


//signingithub
export const signInGithub = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const githubAuthProvider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(githubAuthProvider)
        .then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                name : resp.user.displayName
            });
        })
        .then(()=>{
            dispatch({type : 'LOGIN_SUCCESS'});
        })
        .catch((err)=>{
            dispatch({type : 'LOGIN_ERR', error : err});
        });
    }
}


//signinfacebook
export const signInFacebook = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const faceboolAuthProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(faceboolAuthProvider)
        .then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                name : resp.user.displayName
            });
        })
        .then(()=>{
            dispatch({type : 'LOGIN_SUCCESS'});
        })
        .catch((err)=>{
            dispatch({type : 'LOGIN_ERR', error : err});
        });
    }
}


//signinwithemailandpassword
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((resp)=>{
            dispatch({type : 'LOGIN_SUCCESS', user : resp.user});
        })
        .catch((err)=>{
            dispatch({type : 'LOGIN_ERR', error : err});
        });
    }
}


//signout
export const signOut = ()=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type : 'LOGOUT_SUCCESS'});
        })
        .catch((err)=>{
            dispatch({type : 'LOGOUT_ERR', error : err});
        })
    }
}


//signup function
export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                name : newUser.name
            });
        })
        .then(()=>{
            dispatch({type : 'SIGNUP_SUCCESS'});
        })
        .catch((err)=>{
            dispatch({type : 'SIGNUP_ERR', error : err});
        })
    }
}


//send email for verification
export const verifyEmailLink = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        if(firebase.auth().currentUser.emailVerified){
            return;
        }
        firebase.auth().currentUser.sendEmailVerification()
        .then((resp)=>{
            dispatch({type : "LINK_SENT"})
        })
        .catch((err)=>{
            dispatch({type : "LINK_ERR", error : err.message})
        })
    }
}


//forgot password link
export const passwordResetLink = (emailId) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().sendPasswordResetEmail(emailId)
        .then(()=>{
            dispatch({type : "PASS_RESLINK_SENT", msg : 'Password Reset Link Sent To Your Email'});
        })
        .catch((err)=>{
            dispatch({type : "PASS_RESLINK_ERR", error : err.message});
        })
    }
}