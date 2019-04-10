import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './Style.css'
class UserAccount extends React.PureComponent {
    render() {
        return (
            <>

                <Card className="filter">
                    <Button className="filter_btn">Send Mail</Button>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Inbox</ListGroup.Item>
                        <ListGroup.Item>sent</ListGroup.Item>
                    </ListGroup>
                </Card>

            </>
        )
    }
}
export default UserAccount;