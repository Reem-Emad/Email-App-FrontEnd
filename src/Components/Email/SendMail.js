import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class SendMail extends React.PureComponent {

    render() {
        return (
            <>


                <Modal className="SendMail" show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Message</Modal.Title>
                    </Modal.Header>
                    <Form className="SendMail_form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>To: </Form.Label>
                            <Form.Control type="Text" placeholder="Enter id" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>From: </Form.Label>
                            <Form.Control type="Text" placeholder="Enter id" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Subject: </Form.Label>
                            <Form.Control type="Text" placeholder="Enter subject" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" className="SendMail_form--btn" onClick={this.props.onHide} >
                            Send
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default SendMail;