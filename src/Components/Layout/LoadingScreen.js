import React from 'react';
import { Card, Spinner} from 'reactstrap';

const LoadingScreen = () => {
    return (
        <div className="container text-center">
            <Card body outline color="warning">
                <Spinner color="warning" />
                Loading ....
            </Card>
        </div>
    )
}

export default LoadingScreen;