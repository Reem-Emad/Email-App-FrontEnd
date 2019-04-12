import React from 'react';
import { withRouter } from 'react-router-dom';
import { MyContext } from '../../App';
import { getUserInbox } from '../../API/Users';
import { Card, ListGroup } from 'react-bootstrap';
import Filters from '../Shared/Filters';
import UserCard from './Card';

import './Style.css'
class UserAccount extends React.PureComponent {
    state = {
        inboxMails: [],
    }
    showMail = (emailId) => (e) => {
        this.props.history.push(`/mail/details/${emailId}`);

    }
    componentDidMount = () => {
        getUserInbox().then(result => { this.setState({ inboxMails: result }) });

    }
    render() {
        return (

            <MyContext.Consumer>

                {value =>
                    (
                        <>
                            <UserCard />
                            <div className="userAccount">

                                <Filters />

                                <Card className="inbox">
                                    <ListGroup variant="flush">
                                        {
                                            this.state.inboxMails.map(email => <ListGroup.Item key={email._id} className="email" onClick={this.showMail(email._id)}>{email.body}</ListGroup.Item>)
                                        }
                                    </ListGroup>
                                </Card>
                            </div>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
export default withRouter(UserAccount);