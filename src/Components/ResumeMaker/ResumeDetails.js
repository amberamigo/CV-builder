import React,{useState} from 'react';
import LoadingScreen from 'react-loading-screen';
import LoadingScreen2 from '../Layout/LoadingScreen2';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { pdfjs, Document, Page } from 'react-pdf';
import { ProxyURL } from '../../Config/commonurls';
import { Card, CardTitle, CardText, Button } from 'reactstrap';



// Resume Details Component for showing details for created resume


const ResumeDetails = (props) => {

    const { resume, auth } = props;

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var ww = Math.round( w*(1/3 + 1/20));

    if(w<700){
        ww = Math.round( w*(2/3 + 1/20));
    }

    const [pdfLoading,setPdfLoading] = useState(true);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    if(!auth.uid) return <Redirect to="/"/>

    if(resume){
        const createdAt = new Date(resume.createdAt.seconds*1000 + resume.createdAt.nanoseconds/1000000).toDateString();
        return (
            <div className="App pt-2 mt-1 mb-1">
                <div className="container col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-10 col-md-4 mx-auto py-4">
                            <br/>
                            <Card body inverse color="dark">
                                <CardTitle><h3>Title</h3></CardTitle>
                                <hr/>
                                <CardText>{resume.title}</CardText>
                            </Card>
                            <br/>
                            <Card body inverse color="dark">
                                <CardTitle><h3>Description</h3></CardTitle>
                                <hr/>
                                <CardText>{resume.description}</CardText>
                            </Card>
                            <br/>
                            <Card body inverse color="dark">
                                <CardTitle><h3>Created</h3></CardTitle>
                                <hr/>
                                <CardText>{createdAt}</CardText>
                            </Card>
                            <br/>
                                <Button color="dark" size="lg" outline block onClick={(e)=>{e.preventDefault(); window.open(resume.url);}} >
                                    <i className="fa fa-cloud-download"></i> Download Resume
                                </Button>
                            <br/>
                        </div>
                        <div className="col-10 col-md-6 md-offset-2 mx-auto px-1">
                            <LoadingScreen loading={pdfLoading} bgColor='#f1f1f1'
                                            spinnerColor='#9ee5f8'
                                            textColor='#676767'
                                            text='Loading Resume Preview' >
                                <Card outline color="dark" >
                                    <Document 
                                        onLoadError={(err)=>{setPdfLoading(false); alert("Couldn't Load Your PDF"); }} 
                                        file={ProxyURL+resume.url}
                                        onLoadSuccess={()=>{setPdfLoading(false);}}
                                        renderMode="svg"
                                    >
                                        <Page pageNumber={1} width={ww} />
                                    </Document>
                                </Card>
                            </LoadingScreen>
                        </div>
                    </div>                        
                </div>
                <br />
            </div>
        );
    }else{
        return (
            <LoadingScreen2/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const resumes = state.firestore.data.resumes;
    const resume = resumes ? resumes[id] : null;
    return {
        auth : state.firebase.auth,
        resume : resume
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection : 'resumes',
        }
    ])
    )
    (ResumeDetails);