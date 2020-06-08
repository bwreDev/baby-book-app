import React, { Component } from 'react';
import EventItem from '../EventItem/EventItem';
import EventsContext from '../../contexts/EventsContext';
import BabyBookApiService from '../../services/baby-book-api-service';
import Navbar from '../../components/Navbar/Navbar';

export default class UserPage extends Component {
  state = {
    start_date: new Date(),
  };

  static contextType = EventsContext;

  componentDidMount() {
    BabyBookApiService.getEvents().then((events) =>
      this.context.setEvents(events)
    );
  }

  /* To Do: Add date filter for events.
  handleOnChange = (e) => {
    this.setState({
      start_date: e.target.value,
    });
  };
  */

  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Baby Book!</h1>
          <h2>Welcome Back!</h2>
        </header>
        {/*To Do: Link to date filter function
        <form>
          <label htmlFor='start_date'>Start date:</label>
          <input
            type='date'
            id='start_date'
            value={this.state.start_date}
            onChange={this.handleOnChange}
          ></input>
        </form>*/}
        <section>
          <h3>Recent Feedings</h3>
          {this.context.events
            .filter((e) => e.title === 'feedings')
            .map((e) => (
              <EventItem key={e.id} event={e} />
            ))}
        </section>
        <section>
          <h3>Recent Diaper Changes</h3>
          {this.context.events
            .filter((e) => e.title === 'diaper_changes')
            .map((e) => (
              <EventItem key={e.id} event={e} />
            ))}
        </section>
        <section>
          <h3>Recent Stretches</h3>
          {this.context.events
            .filter((e) => e.title === 'stretches')
            .map((e) => (
              <EventItem key={e.id} event={e} />
            ))}
        </section>
        <section>
          <h3>Upcoming Appointments</h3>
          {this.context.events
            .filter((e) => e.title === 'appointments')
            .map((e) => (
              <EventItem key={e.id} event={e} />
            ))}
        </section>
      </>
    );
  }
}
