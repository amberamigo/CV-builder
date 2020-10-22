import { Template1 } from '../../Config/commonurls';
const axios = require('axios').default;
const saveAs = require('file-saver');

export const createResume = (values)=>{
    return (dispatch, getState, {getFirebase})=>{
        //call to database
        const firestore = getFirebase().firestore();

        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        const storageURL = 'https://google.com';

        axios.post(Template1+'/', values, {responseType : "blob"} )
        .then((resp)=>{

            dispatch({ type : 'RESUME_LOADING' });

            if(resp.status === 200){

                const pdfBlob = new Blob([resp.data], { type: 'application/pdf' });
                saveAs(pdfBlob, values.title+'.pdf');

            }else{
                throw new Error('Resume Creation Error From Server!!');
            }

        })
        .then(()=>{

            dispatch({ type : 'RESUME_LOADING' });

            firestore.collection('resumes').add({
                title : values.title,
                description : values.description,
                url : storageURL,
                authorName : profile.name,
                authorID : authorID,
                createdAt : new Date() 
            });

        })
        .then(()=>{
            const resume = {};
            resume.title = values.title;
            resume.description = values.description;
            resume.url = storageURL;

            dispatch({ type : 'RESUME_CREATED', resume : resume });
        })
        .catch((err)=>{
            dispatch({ type : 'CREATE_RESUME_ERR', error : err });
            console.log(err);
        })
    }
};

export const previewResume = (values) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({ type : 'RESUME_LOADING'});

        axios.post(Template1+'/previewResume', values)
        .then((resp)=>{

            const wndw = window.open('','',"width=700,height=900");
            wndw.document.write(resp.data);

        })
        .catch((err)=>{
            alert(err.message);
        })
    }
} 