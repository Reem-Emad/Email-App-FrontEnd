import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Filters from '../Shared/Filters';
import {  withRouter } from 'react-router-dom';
import { getEmailById, DeleteEmail} from '../../API/Messages';
import './Style.css';
class ReceivedMail extends React.PureComponent {
    state = {
        email: {}
    }
    handleDelete = (emailId) => (e) => {
        DeleteEmail(emailId);
        this.props.history.push('/inbox')
    }

    componentDidMount = () => {
        const emailId = this.props.match.params.emailId;
        getEmailById(emailId).then(email => { this.setState({ email: email }) });
    }
    render() {
        // console.log(this.props.navigation.goBack)
        return (
            <>
                <div className="receivedMail_page">
                    <Filters />
                    <Card className="receivedMail">
                        <Card.Body>
                            <Card.Title><span>From: </span><span>{this.state.email.from}</span></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">to: <span>{this.state.email.to}</span> </Card.Subtitle>
                            <Card.Text>
                                {this.state.email.body}
                            </Card.Text>
                            <Button onClick={this.handleDelete(this.state.email._id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}
export default withRouter(ReceivedMail); 