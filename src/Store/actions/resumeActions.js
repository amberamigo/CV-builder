import fb from '../../Config/fireConfig';
import { Template1 } from '../../Config/commonurls';
const axios = require('axios').default;
const saveAs = require('file-saver');

//Functions related to resume creation


//function for calling main createResume
export const createResume = (values)=>{
    return (dispatch, getState, {getFirebase})=>{
        //call to database
        const firestore = getFirebase().firestore();
        const storageRef = fb.storage();

        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        var storageURL = '';
        const setStorageUrl = (url) => {storageURL = url}
        const rndm = Math.floor(Math.random() * Math.floor(100000));

        axios.post(Template1+'/', values, {responseType : "blob"} )
        .then((resp)=>{

            dispatch({ type : 'RESUME_LOADING' });

            if(resp.status === 200){

                const pdfBlob = new Blob([resp.data], { type: 'application/pdf' });
                const uploadTask = storageRef.ref('createdResume/'+values.title+'_'+rndm+'.pdf').put(pdfBlob)
                uploadTask.on(
                    'state_changed',
                    snapshot => {},
                    error => {console.error(error)},
                    () => {
                        storageRef.ref('createdResume')
                        .child(values.title+'_'+rndm+'.pdf')
                        .getDownloadURL()
                        .then((url)=>{
                            setStorageUrl(url);
                        })
                        .then(()=>{
                            firestore.collection('resumes').add({
                                title : values.title,
                                description : values.description,
                                url : storageURL,
                                authorName : profile.name,
                                authorID : authorID,
                                createdAt : new Date() 
                            });
                        })
                        .catch((err)=>{
                            console.error(err);
                        })
                    }
                );

                saveAs(pdfBlob, values.title+'.pdf');

            }else{
                console.log('Resume Creation Error From Server!!');
            }

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


//function for calling preview resume
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