import React from 'react';
import { AddEmail } from '../../API/Messages';
import { Modal, Button, Form } from 'react-bootstrap';

class SendMail extends React.PureComponent {
    state = {
        from: '',
        to: '',
        body: ''
    }
    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({ [key]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // debugger;
        const { to, from, body } = this.state;
        AddEmail({ to, from, body }).then();
    }
    render() {
        return (
            <>


                <Modal className="SendMail" show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Message</Modal.Title>
                    </Modal.Header>
                    <Form className="SendMail_form" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>To: </Form.Label>
                            <Form.Control type="Text" placeholder="Enter to" name='to' value={this.state.to} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>From: </Form.Label>
                            <Form.Control type="Text" placeholder="Enter from" name='from' value={this.state.from} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" rows="5" name='body' value={this.state.body} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="secondary" type="submit" className="SendMail_form--btn" onClick={this.props.onHide} >
                            Send
                        </Button>
                    </Form>

                    <Modal.Footer>


                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default SendMail;