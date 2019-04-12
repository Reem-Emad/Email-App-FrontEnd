import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { MyContext } from '../../App';

import SendMail from '../Email/SendMail';

import './Style.css'
class Filters extends React.PureComponent {
    state = {
        showModal: false
    }
    handleShow = (e) => {

        this.setState({ showModal: true });

    }
    handleClose = (e) => {

        this.setState({ showModal: false });

    }
    handleSent = (e) => {
        this.props.history.push("/sent");
    }
    handleInbox = (e) => {

        this.props.history.push("/inbox");
    }
    render() {
        return (

            <MyContext.Consumer>

                {value =>
                    (
                        <>
                            <SendMail show={this.state.showModal} onHide={this.handleClose} />
                            <Card className="filter">
                                <Button className="filter_btn" onClick={this.handleShow}>Send Mail</Button>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="filter_item" onClick={this.handleInbox}>Inbox</ListGroup.Item>
                                    <ListGroup.Item className="filter_item" onClick={this.handleSent}>sent</ListGroup.Item>
                                </ListGroup>
                            </Card>

                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
export default withRouter(Filters);