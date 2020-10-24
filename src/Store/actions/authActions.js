//import fb from '../../Config/fireConfig'; 

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