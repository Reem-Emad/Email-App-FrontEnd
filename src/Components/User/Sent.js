import React from 'react';
import { withRouter } from 'react-router-dom';
import { MyContext } from '../../App';
import { Card, ListGroup } from 'react-bootstrap';
import { getUserSent } from '../../API/Users';
import Filters from '../Shared/Filters';
import UserCard from './Card';

import './Style.css'
class UserAccount extends React.PureComponent {
    state = {
        sentMails: []
    }
    showMail = (emailId) => (e) => {

        this.props.history.push(`/mail/details/${emailId}`);

    }
    componentDidMount = () => {
        getUserSent().then(result => { this.setState({ sentMails: result }) });

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

                                            this.state.sentMails.map(email => <ListGroup.Item key={email._id} className="email" onClick={this.showMail(email._id)}>{email.body}</ListGroup.Item>)
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