import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { login } from '../../API/Users';
import { MyContext } from '../../App';

import './Style.css';

class LoginForm extends React.PureComponent {
    state = {
        email: '',
        password: '',
        errorMsg: ''
    }
    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({ [key]: value });
    }
    handleSubmit = (addLoggedinUser) => (e) => {

        e.preventDefault();
        debugger;
        const { email, password } = this.state;
        login({ email, password })
            .then(res => {
                debugger;
                // if (res !== 'Unauthorized') {
                //     localStorage.setItem('userToken', res.token);
                //     addLoggedinUser(res.profile);
                //     this.props.history.push('/inbox');
                // }
                // else {
                //     this.setState({ errorMsg: 'Incorrect mail or password' })
                // }
            })
            .catch(err => { debugger; });
    }
    render() {
        return (
            <>
                <MyContext.Consumer>

                    {value =>
                        (
                            <Form className="loginForm" onSubmit={this.handleSubmit(value.addLoggedinUser)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="loginForm_btn">
                                    Submit
                                </Button>
                                <Form.Text style={{ color: 'red' }}>{this.state.errorMsg}</Form.Text>
                            </Form>
                        )
                    }
                </MyContext.Consumer>
            </>

        )
    }
}

export default withRouter(LoginForm);