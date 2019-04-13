import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Forms/Login';
import UserInbox from './Components/User/Inbox';
import UserSent from './Components/User/Sent';
import ReceivedSentMail from './Components/Email/Received-Sent';

export const MyContext = React.createContext({});
class App extends Component {

  state = {
    loggedinUser: {},
    authorized: false
  }
  addLoggedinUser = (loggedinUser) => {
    this.setState({ loggedinUser: loggedinUser, authorized: true });
  }
  render() {
    const value = {
      state: this.state,
      addLoggedinUser: this.addLoggedinUser,
    }
    return (
      <>
        {/* <LoginForm /> */}
        {/* <UserAccount /> */}
        {/* <ReceivedMail /> */}
        {/* <SendMail /> */}
        <MyContext.Provider value={value}>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginForm} />
              {
                this.state.authorized &&
                <Switch>
                  <Route exact path="/sent" component={UserSent} />
                  <Route exact path="/inbox" component={UserInbox} />
                  <Route exact path="/mail/details/:emailId" component={ReceivedSentMail} />
                </Switch>

              }
            </Switch>
          </Router>
        </MyContext.Provider>
      </>
    );
  }
}

export default App;
