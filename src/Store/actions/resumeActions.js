export const createResume = (resume)=>{
    return (dispatch, getState, {getFirebase})=>{
        //call to database
        const firestore = getFirebase().firestore();

        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;

        firestore.collection('resumes').add({
            title : 'ResumeNew3',
            description : 'Newly Added Resume Again2',
            url : 'https://fb3.com',
            authorFirstName : profile.firstName,
            authorID : authorID,
            createdAt : new Date() 
        })
        .then(()=>{
            dispatch({ type : 'CREATE_RESUME', resume : resume});
        })
        .catch((err)=>{
            dispatch({ type : 'CREATE_RESUME_ERR', resume : resume});
            console.log(err);
        })
    }
};