import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
          console.log(authUser);
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
      <Navigation authUser={this.state.authUser} />
      <hr />
       <Route exact path={ROUTES.LANDING} component={LandingPage} />
       <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
       <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
       <Route exact path={ROUTES.HOME} component={HomePage} />
       <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
       <Route exact path={ROUTES.ADMIN} component={AdminPage} /> 
      </Router>
    );
  }
}
   


export default withFirebase(App);