import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Card, CardBody, CardImg, CardDeck, CardFooter } from 'reactstrap';


//Template Selection Form Component 

class TemplateSelectionForm extends Component {

    toNextStep = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    toPrevStep = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, selectTemplate, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">

                <div className="card-body">
                    <h3 className="card-title">Lets Get Started</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label htmlFor="title">Resume Title</Label>
                            <Input 
                                type = "text" 
                                id = "title"
                                name = "title"
                                autoFocus = "on"
                                autoComplete = "off"
                                placeholder = "Give A Title For Your New Resume"
                                value = {values.isSubmitted ? '' : values.title}
                                onChange = {(e)=>handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input 
                                type = "text" 
                                id = "description"
                                name = "description"
                                autoComplete = "off"
                                placeholder = "Give A Brief Description For Resume"
                                value = {values.isSubmitted ? '' : values.description}
                                onChange = {(e)=>handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Select Template</Label>
                            <CardDeck>
                                <Card style={{cursor : 'pointer'}} outline color="primary" onClick={(e)=>{if(values.title===''){return;}  selectTemplate(1); this.toNextStep(e);}}>
                                    <CardImg src="/assets/Beginner_A.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardFooter>Beginner A</CardFooter>
                                    </CardBody>
                                </Card>
                                <Card style={{cursor : 'pointer'}} outline color="primary" onClick={(e)=>{if(values.title===''){return;} selectTemplate(2); this.toNextStep(e);}}>
                                    <CardImg src="/assets/Professional_A.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardFooter>Professional A</CardFooter>
                                    </CardBody>
                                </Card>
                                <Card style={{cursor : 'pointer'}} outline color="primary" onClick={(e)=>{if(values.title===''){return;} selectTemplate(3); this.toNextStep(e);}}>
                                    <CardImg src="/assets/Professional_B.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardFooter>Professional B</CardFooter>
                                    </CardBody>
                                </Card>
                                <Card style={{cursor : 'pointer'}} outline color="primary" onClick={(e)=>{if(values.title===''){return;} selectTemplate(4); this.toNextStep(e);}}>
                                    <CardImg src="/assets/Professional_C.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardFooter>Professional C</CardFooter>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </FormGroup>
                    </Form>
                </div>

                <div className="row text-center">
                    {/* <div className="col-6 col-md-4">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} disabled size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4">
                        <Button outline color="danger" onClick={(e)=>this.toNextStep(e)} size="lg" block>Next <i className="fa fa-chevron-circle-right"></i></Button>
                    </div> */}
                </div>
                <hr/>
            </div>
        );
    }
}

export default TemplateSelectionForm