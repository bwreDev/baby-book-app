import React from 'react';

const EventsContext = React.createContext({
  user: null,
  events: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  addEvent: () => {},
  deleteEvent: () => {},
});

export default EventsContext;
