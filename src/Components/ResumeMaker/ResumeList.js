import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardDeck, CardHeader, CardFooter, CardImg, Col, Row, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResumeList = (props) => {
    const resumes = props.resume;
    if(resumes.length>0){
        return (
            <CardDeck>
                {resumes && resumes.map( resume => {
                    var createdAt = new Date(resume.createdAt.seconds*1000 + resume.createdAt.nanoseconds/1000000).toDateString();
                    return (
                        <Link className="res-card" to={"/resume/"+resume.id} key={resume.id}>
                            <Card style={{height:200, width:250, marginTop:5}}>
                                <CardHeader> </CardHeader>
                                <CardBody>
                                    <strong>
                                        <CardTitle>{resume.title}</CardTitle>
                                    </strong>
                                    <CardText>{resume.description}</CardText>
                                </CardBody>
                                <CardFooter>
                                    {createdAt}
                                </CardFooter>
                            </Card>
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