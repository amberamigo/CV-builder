import React, {useState} from 'react';
import { Alert } from 'reactstrap';

const MessageDisplay = ({msg}) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
            {msg}
        </Alert>
    );
}

export default MessageDisplay;
