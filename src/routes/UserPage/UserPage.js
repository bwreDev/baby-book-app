import React, { Component } from 'react';
import EventsContext from '../../contexts/EventsContext';
import BabyBookApiService from '../../services/baby-book-api-service';
import EventItem from '../../components/EventItem/EventItem';

export default class UserPage extends Component {
  static contextType = EventsContext;

  componentDidMount() {
    this.context.clearError();
    BabyBookApiService.getEvents()
      .then(this.context.setEventsList)
      .catch(this.context.setError);
  }

  renderEvents() {
    const { eventList = [] } = this.context;
    return eventList.map((event) => (
      <EventItem key={event.id} event={event} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <p className='UserPage'>
        {error ? (
          <span className='red'>There was an error, try again</span>
        ) : (
          this.renderEvents()
        )}
      </p>
    );
  }
}
