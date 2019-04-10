import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Style.css';

class LoginForm extends React.PureComponent {
    render() {
        return (
            <>
                <Form className="loginForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="loginForm_btn">
                        Submit
                  </Button>
                </Form>
            </>
        )
    }
}

export default LoginForm;