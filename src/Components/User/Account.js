import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import Filters from '../Shared/Filters';
import './Style.css'
class UserAccount extends React.PureComponent {
    showMail = (e) => {
        this.props.history.push('/mail/details');

    }

    render() {
        return (
            <>
                <div className="userAccount">
                    <Filters />

                    <Card className="inbox">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="email" onClick={this.showMail}><span className="email_title">mail title </span><span>body</span></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </>
        )
    }
}
export default withRouter(UserAccount);