import React from 'react';
import { Card, CardTitle, CardBody, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResumeList = (props) => {
    const resumes = props.resume;
    if(resumes.length>0){
        return (
            <CardGroup>
                {resumes && resumes.map( resume => {
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
    }else{
        return (
            <div>
                <h3>No Resumes Yet, Lets Create One.....</h3>
            </div>
        );
    }
    
}

export default ResumeList;