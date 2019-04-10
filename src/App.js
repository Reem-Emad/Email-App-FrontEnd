import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Forms/Login';
import UserAccount from './Components/User/Account';
import ReceivedSentMail from './Components/Email/Received-Sent';

class App extends Component {
  render() {
    return (
      <>
        {/* <LoginForm /> */}
        {/* <UserAccount /> */}
        {/* <ReceivedMail /> */}
        {/* <SendMail /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/sent" component={UserAccount} />
            <Route exact path="/inbox" component={UserAccount} />
            <Route exact path="/mail/details" component={ReceivedSentMail} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
