import React, { Component } from 'react'
import { Form, FormGroup, Card, CardBody, CardImg, CardDeck, CardText, Button } from 'reactstrap';

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
        const { selectTemplate } = this.props;
        return (
            <div className="card animated fadeInLeft">

                <div className="card-body">
                    <h3 className="card-title">Select Template</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <CardDeck>
                                <Card outline color="primary" onClick={(e)=>{selectTemplate(1); this.toNextStep(e);}}>
                                    <CardImg src="public/logo192.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardText>Template 1</CardText>
                                    </CardBody>
                                </Card>
                                <Card outline color="primary" onClick={(e)=>{selectTemplate(2); this.toNextStep(e);}}>
                                    <CardImg src="public/logo192.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardText>Template 2</CardText>
                                    </CardBody>
                                </Card>
                                <Card outline color="primary" onClick={(e)=>{selectTemplate(3); this.toNextStep(e);}}>
                                    <CardImg src="public/logo192.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardText>Template 3</CardText>
                                    </CardBody>
                                </Card>
                                <Card outline color="primary" onClick={(e)=>{selectTemplate(4); this.toNextStep(e);}}>
                                    <CardImg src="public/logo192.png" alt="Template Image"/>
                                    <CardBody>
                                        <CardText>Template 4</CardText>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </FormGroup>
                    </Form>
                </div>

                <div className="row text-center">
                    <div className="col-6 col-md-4">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} disabled size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4">
                        <Button outline color="danger" onClick={(e)=>this.toNextStep(e)} size="lg" block>Next <i className="fa fa-chevron-circle-right"></i></Button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default TemplateSelectionForm