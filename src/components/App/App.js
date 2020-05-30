import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../Navbar/Navbar';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import EventForm from '../EventForm/EventForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import EventContext from '../../contexts/EventsContext';
import UserPage from '../UserPage/UserPage';
import config from '../../config';
import TokenService from '../../services/token-services';
import { EVENTS } from '../../STORE/STORE';
import './App.css';

export default class App extends Component {
  static contextType = EventContext;

  state = {
    events: EVENTS,
    user: null,
  };

  //Foundation for API fetch
  /*
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}events`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          events: this.state.events.concat(data),
        });
      });
  }
  */

  addEvent = (event) => {
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(event),
      user: this.state.user,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          events: this.state.folders.concat(data),
        });
      });
  };

  deleteEvent = (id, eb) => {
    return fetch(`${config.API_ENDPOINT}/events/${id}`, {
      method: 'delete',
    })
      .then((res) => {
        if (eb) {
          eb();
        }
        this.setState({
          events: this.state.events.filter(
            (event) => event.id !== id
          ),
        });
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  };

  setEvents = (user_id) => {
    return fetch(`${config.API_ENDPOINT}/events/`, {
      headers: {
        authorization: TokenService.getAuthToken(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          events: this.state.events.user_id.concat(data),
        });
      });
  };

  render() {
    const value = {
      events: this.state.events,
      setEvents: this.setEvents(),
    };
    return (
      <EventContext.Provider value={value}>
        <main className='App'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegistrationForm} />
            <Route path='/event' component={EventForm} />
            <Route path='/user' component={UserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </EventContext.Provider>
    );
  }
}
