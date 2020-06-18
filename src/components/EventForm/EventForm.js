import React, { Component } from 'react';
import EventsContext from '../../contexts/EventsContext';
import BabyBookApiService from '../../services/baby-book-api-service';
import Navbar from '../../components/Navbar/Navbar';
import moment from 'moment';
import './EventForm.css';

export default class EventForm extends Component {
  static contextType = EventsContext;

  state = {
    event_type: null,
  };

  onChange = (event) => {
    this.setState({
      event_type: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let eventObject = {
      title: this.state.event_type,
    };

    if (eventObject.title === 'diaper_changes') {
      eventObject.content = event.target.diaper_changes.value;
    }
    if (eventObject.title === 'feedings') {
      eventObject.content =
        event.target.feedings.value +
        ' ' +
        event.target.feeding_amount.value +
        ' ' +
        event.target.measurement.value;
    }
    if (eventObject.title === 'appointments') {
      eventObject.content =
        event.target.appointments.value +
        ' on - ' +
        moment(event.target.appointments_date.value).format(
          'MMM Do YY'
        );
    }
    if (eventObject.title === 'stretches') {
      eventObject.content = event.target.stretches.value;
    }

    BabyBookApiService.postEvent(eventObject)
      .then(this.context.addEvent)
      .then(this.props.history.push('/user'))
      .catch(this.context.setError);
  };

  render() {
    return (
      <>
        <Navbar />
        <h2>Please select an event to create!</h2>
        <form className='event-form' onSubmit={this.handleSubmit}>
          <h3>Event type</h3>
          <select onChange={this.onChange} name='event_type'>
            <option value=''></option>
            <option value='diaper_changes'>Diaper Changes</option>
            <option value='feedings'>Feedings</option>
            <option value='appointments'>Appointments</option>
            <option value='stretches'>Stretches</option>
          </select>
          {this.state.event_type === 'diaper_changes' ? (
            <fieldset className='diaper_changes'>
              <label htmlFor='diaper_changes'>
                <h3>Diaper changes</h3>
              </label>
              <h4>Option</h4>
              <select name='diaper_changes'>
                <option value=''></option>
                <option value='wet'>Wet</option>
                <option value='dirty'>Dirty</option>
                <option value='mixed'>Mixed</option>
              </select>
            </fieldset>
          ) : null}
          {this.state.event_type === 'feedings' ? (
            <fieldset className='feedings'>
              <label htmlFor='feedings'>
                <h3>Feedings</h3>
              </label>
              <h4>Type</h4>
              <select name='feedings'>
                <option value=''></option>
                <option value='nursing'>Nursing</option>
                <option value='pumped'>Pumped</option>
                <option value='formula'>Formula</option>
              </select>
              <h4>Amount</h4>
              <input
                placeholder='0'
                type='number'
                name='feeding_amount'
              />
              <h4>Unit</h4>
              <select name='measurement'>
                <option value=''></option>
                <option value='ml'>milliliters</option>
                <option value='oz'>ounces</option>
              </select>
            </fieldset>
          ) : null}
          {this.state.event_type === 'appointments' ? (
            <fieldset className='appointments'>
              <label htmlFor='appointments'>
                <h3>Appointment</h3>
              </label>
              <textarea
                placeholder='Type of appointment'
                name='appointments'
              ></textarea>
              <input type='date' name='appointments_date' />
            </fieldset>
          ) : null}
          {this.state.event_type === 'stretches' ? (
            <fieldset className='stretches'>
              <label htmlFor='stretches'>
                <h3>Stretches</h3>
              </label>
              <textarea
                placeholder='Type of stretch'
                name='stretches'
              ></textarea>
            </fieldset>
          ) : null}
          <button className='event-button' type='submit'>
            Save
          </button>
        </form>
      </>
    );
  }
}
