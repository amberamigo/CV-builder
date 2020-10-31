import React from 'react';
import { Card, CardText, CardDeck, CardImg, Col, Row, Badge } from 'reactstrap';
import ResumeCard from '../Layout/ResumeCard'; 
import { Link } from 'react-router-dom';


//Component for Rendering List of Resumes on dashboard


const ResumeList = (props) => {
    const resumes = props.resume;
    if(resumes.length>0){
        return (
            <CardDeck>
                {resumes && resumes.map( resume => {
                    var createdAt = new Date(resume.createdAt.seconds*1000 + resume.createdAt.nanoseconds/1000000).toDateString();
                    return (
                        <Link className="res-card" to={"/resume/"+resume.id} key={resume.id}>
                            <ResumeCard title={resume.title} description={resume.description} createdAt={createdAt} />
                        </Link>
                    );
                })}
            </CardDeck>  
        );
    }else{
        return (
            <div className="App pt-3 mt-3">
                <div className="container col-lg-8 mx-auto text-center">
                    <Card className="py-3 my-3">
                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>
                                <CardImg src="/assets/doggy.png" ></CardImg>
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                        <CardText>
                            <Badge color="warning"><h3>No Resumes Yet, Let Create One !!</h3></Badge>
                        </CardText>
                    </Card>
                </div>
            <br />
        </div>
        );
    }
    
}

export default ResumeList;