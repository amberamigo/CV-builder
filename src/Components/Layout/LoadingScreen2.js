import React from 'react';
import { Card, Spinner} from 'reactstrap';

// Loading Screen For Resume Preview 

const LoadingScreen2 = () => {
    return (
        <div className="container text-center">
            <Card body outline color="warning">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h3>Loading ....</h3>
                        <br/>
                        <Spinner color="warning" />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default LoadingScreen2;