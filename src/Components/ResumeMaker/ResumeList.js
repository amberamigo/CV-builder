import React from 'react';
import { Card, CardTitle, CardBody, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResumeList = (props) => {
    const resumes = props.resume;
    var resumeArray = [];
    if(resumes !== null){
        for(var i in resumes){
            resumeArray.push({...resumes[i], id : i });
        }
    }
    return (
        <CardGroup>
            {resumeArray.length>0 && resumeArray.map( resume => {
                return (
                    <Link to={"/resume/"+resume.id} key={resume.id}>
                        <Card>
                            <CardTitle>{resume.title}</CardTitle>
                            <CardBody>{resume.description}</CardBody>
                        </Card>
                    </Link>
                );
            })}
        </CardGroup>  
    );
}

export default ResumeList;