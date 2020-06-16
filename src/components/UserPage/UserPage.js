import React, { Component } from 'react';
import EventItem from '../EventItem/EventItem';
import EventsContext from '../../contexts/EventsContext';
import BabyBookApiService from '../../services/baby-book-api-service';
import Navbar from '../../components/Navbar/Navbar';
import './UserPage.css';

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

  handleDelete = (id) => {
    BabyBookApiService.deleteEvent(id).then((res) => {
      this.componentDidMount();
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Baby Book!</h1>
          <h2>Welcome Back!</h2>
        </header>
        <section>
          <h3>Recent Feedings</h3>
          <ul>
            {this.context.events
              .filter((e) => e.title === 'feedings')
              .map((e) => (
                <li key={e.id}>
                  <EventItem event={e} />
                  <button
                    className='delete_feedings'
                    onClick={() => this.handleDelete(e.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h3>Recent Diaper Changes</h3>
          <ul>
            {this.context.events
              .filter((e) => e.title === 'diaper_changes')
              .map((e) => (
                <li key={e.id}>
                  <EventItem event={e} />
                  <button
                    className='delete_diaper_changes'
                    onClick={() => this.handleDelete(e.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h3>Recent Stretches</h3>
          <ul>
            {this.context.events
              .filter((e) => e.title === 'stretches')
              .map((e) => (
                <li key={e.id}>
                  <EventItem event={e} />
                  <button
                    className='delete_stretches'
                    onClick={() => this.handleDelete(e.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h3>Upcoming Appointments</h3>
          <ul>
            {this.context.events
              .filter((e) => e.title === 'appointments')
              .map((e) => (
                <li key={e.id}>
                  <EventItem event={e} />
                  <button
                    className='delete_appointment'
                    onClick={() => this.handleDelete(e.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        </section>
      </>
    );
  }
}
