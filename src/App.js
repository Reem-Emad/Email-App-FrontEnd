import React, { Component } from 'react';
import './App.css';
import LoginForm from './Components/Forms/Login';
import UserAccount from './Components/User/Account';
import ReceivedMail from './Components/Email/Received';
class App extends Component {
  render() {
    return (
      <>
        {/* <LoginForm /> */}
        {/* <UserAccount /> */}
        <ReceivedMail />
      </>
    );
  }
}

export default App;
