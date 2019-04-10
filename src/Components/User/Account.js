import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Filters from '../Shared/Filters';
import './Style.css'
class UserAccount extends React.PureComponent {
    render() {
        return (
            <>
                <div className="userAccount">
                    <Filters />

                    <Card className="inbox">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="email"><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                            <ListGroup.Item className="email"><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                            <ListGroup.Item className="email"><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                            <ListGroup.Item className="email"><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                            <ListGroup.Item className="email"><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                            <ListGroup.Item className="email"><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </>
        )
    }
}
export default UserAccount;