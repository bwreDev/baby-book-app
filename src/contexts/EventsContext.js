import React, { Component } from 'react';

const EventsContext = React.createContext({
  events: [],
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  clearUser: () => {},
  setEvents: () => {},
  clearEvent: () => {},
  deleteEvent: () => {},
});

export default EventsContext;

export class EventProvider extends Component {
  state = {
    events: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setEvents = (events) => {
    this.setState({ events });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  clearEvent = () => {
    this.setEvents([]);
    this.setUser({});
  };

  addEvent = (event) => {
    this.setEvents([...this.state.events, event]);
  };

  deleteEvent = () => {
    // this.setEvents({ events });
  };

  render() {
    const value = {
      events: this.state.events,
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEvents: this.setEvents,
      setUser: this.setUser,
      clearEvent: this.clearEvent,
      addEvent: this.addEvent,
      deleteEvent: this.deleteEvent,
    };

    return (
      <EventsContext.Provider value={value}>
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}
