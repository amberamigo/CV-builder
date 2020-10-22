import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, CustomInput, Label, Button, Progress, Spinner } from 'reactstrap';
import MessageDisplay from '../../Layout/MessageDisplay';
import { UploadURL, ExtractData } from '../../../Config/commonurls';

const ResumeScrapForm = (props) => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('Select File To Scrap');
    const [uploadedFile, setuploadedFile] = useState({});
    const [message, setMessage] = useState();
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [extracting, setExtracting] = useState(false);
    const [extracted, setExtracted] = useState(false);
 
    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName('File Selected !!');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('user', props.user);

        try{
            axios.post(UploadURL, formdata, {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                },
                onUploadProgress : (ProgressEvent) => {
                    setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded*100)/ProgressEvent.total)));
                    setTimeout(()=>setUploadPercentage(0),10000);
                }
            }).then((res)=>{
                const { fileName, filePath } = res.data;
                setuploadedFile({ fileName, filePath });
                setFileName('Your File is Uploaded !!');

                setMessage('File Upload Complete !!');
            })
            .catch((err)=>{
                setMessage('Error In Uploading File :/');
            })
        }catch(err){
            if(err){
                console.log('Error With Server');
            }
        }
    }

    const onExtract = (e) =>{
        e.preventDefault();
        if(!uploadedFile.fileName){
            setMessage('No File To Extract Info');
            return;
        }

        setExtracting(true);
        const fileName = uploadedFile.fileName

        try{

            axios.post(ExtractData, { 'fileName' : fileName }, {
                headers : {
                    'Content-Type' : 'application/json'
                },
            }).then((res)=>{
                if(res.status === 200 && res.data){

                    setMessage('Your Data From Previous Resume Is Successfully Extracted !!');
                    
                    if(res.data.name&&res.data.name!==""){props.changeValue('name',res.data.name)}
                    if(res.data.email&&res.data.email!==""){props.changeValue('email',res.data.email)}
                    if(res.data.mobile_number&&res.data.mobile_number!==""){props.changeValue('phone',res.data.mobile_number)}
                    if(res.data.degree&&res.data.degree!==""){props.changeValue('edu_course_name_1',res.data.degree)}
                    if(res.data.college_name&&res.data.college_name!==""){props.changeValue('edu_institute_name_1',res.data.college_name)}
                    if(res.data.skills&&res.data.skills.length>0){props.changeValue('skills_name_1',res.data.skills[0])}


                    setExtracting(false);
                    setExtracted(true);
                }else{
                    setMessage('Could Not Extract Data From Your Previous Resume :/');
                    setExtracting(false);
                    setExtracted(false);
                }
            })
            .catch((err)=>{
                setMessage('Error In Extracting Info From File :/');
            })

        }catch(err){
            console.log('Error In Extracting Details');
        }

    }

    const toNextStep = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const toPrevStep = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <div className="card animated fadeInLeft">

            <div className="card-body">
                <h3 className="card-title">Upload Your Previous Resume (PDF File)</h3>
                <hr />
            </div>
            <div className="container-fluid">
                {message ? <MessageDisplay msg={message}/> : null}
                <Fragment>
                    <Form onSubmit={(e)=>onSubmit(e)}>
                        <FormGroup>
                            <Label for="fileUploader">{fileName}</Label>
                            <CustomInput onChange={onChange} type="file" id="fileUploader" name="customFile" accept="application/pdf" label="Yo, pick a file!" />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" color="warning" size="lg">
                                Upload
                            </Button>
                        </FormGroup>
                    </Form>
                    <br/>
                        <Progress animated color="warning" value={uploadPercentage} >
                            {uploadedFile.fileName ? 'Uploading...'+uploadPercentage+' %' : 'Done 100%'}
                        </Progress>
                    <br/>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <Button type="button" outline color="success" size="lg" onClick={(e)=>onExtract(e)} block disabled={!uploadedFile.fileName}>
                                Extract Info
                            </Button>
                            <br/>
                            {extracting ? <Spinner color="success"/> : null}
                            {extracted ? <Button type="button" outline color="info" onClick={(e)=>toNextStep(e)} block disabled={!uploadedFile.fileName}>
                                            Some Details Are Filled Now, Continue <i className="fa fa-chevron-circle-right"></i>
                                        </Button> : null 
                            }
                        </div>
                    </div>
                </Fragment>
                <br/>
                <hr/>
            </div>
            <div className="row text-center">
                <div className="col-6 col-md-4">
                    <Button outline color="primary" onClick={(e)=>toPrevStep(e)} size="lg" block>
                        <i className="fa fa-chevron-circle-left"></i> Back
                    </Button>
                </div>
                <div className="col-6 col-md-4 offset-md-4">
                    <Button outline color="dark" onClick={(e)=>toNextStep(e)} size="lg" block disabled={extracted}>
                        Skip <i className="fa fa-chevron-circle-right"></i>
                    </Button>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default ResumeScrapForm;
