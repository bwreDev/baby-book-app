import React, { Component } from 'react';
import EventItem from '../EventItem/EventItem';
import EventsContext from '../../contexts/EventsContext';

export default class UserPage extends Component {
  static contextType = EventsContext;
  render() {
    console.log(this.context.events);
    return (
      <>
        <header role='banner'>
          <h1>Baby Book!</h1>
          <h2>Welcome Back {this.context.user}!</h2>
        </header>
        <section>
          <h3>Recent Feedings</h3>
          {this.context.events
            .filter((e) => e.type === 'feedings')
            .map((e) => (
              <EventItem event={e} />
            ))}
        </section>
        <section>
          <h3>Recent Diaper Changes</h3>
          {this.context.events
            .filter((e) => e.type === 'diaper_changes')
            .map((e) => (
              <EventItem event={e} />
            ))}
        </section>
        <section>
          <h3>Recent Stretches</h3>
          {this.context.events
            .filter((e) => e.type === 'stretches')
            .map((e) => (
              <EventItem event={e} />
            ))}
        </section>
        <section>
          <h3>Upcoming Appointments</h3>
          {this.context.events
            .filter((e) => e.type === 'appointments')
            .map((e) => (
              <EventItem event={e} />
            ))}
        </section>
      </>
    );
  }
}
