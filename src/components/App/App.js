import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/Utilities/PrivateRoute';
import PublicOnlyRoute from '../../components/Utilities/PublicOnlyRoute';
import LandingPage from '../LandingPage/LandingPage';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import EventForm from '../EventForm/EventForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import UserPage from '../UserPage/UserPage';
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
import Footer from '../Footer/Footer';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();

      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <main className='App'>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <PublicOnlyRoute path='/login' component={LoginForm} />
          <PublicOnlyRoute
            path='/register'
            component={RegistrationForm}
          />
          <PrivateRoute path='/event' component={EventForm} />
          <PrivateRoute path='/user' component={UserPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </main>
    );
  }
}
