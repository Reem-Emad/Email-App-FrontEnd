import React from 'react';
import { Card } from 'react-bootstrap';
import Filters from '../Shared/Filters';
import './Style.css';
class ReceivedMail extends React.PureComponent {
    render() {
        return (
            <>
                <div className="receivedMail_page">
                    <Filters />
                    <Card className="receivedMail">
                        <Card.Body>
                            <Card.Title><span>From: </span><span>t@gmail.com</span></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">to: <span>t@gmail.com</span> </Card.Subtitle>
                            <Card.Text>
                                email body
                                email bod
                         </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}
export default ReceivedMail; 