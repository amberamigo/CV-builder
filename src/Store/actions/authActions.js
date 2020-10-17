//import fb from '../../Config/fireConfig'; 
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
            return firestore().collection('users').doc(resp.user.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName
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