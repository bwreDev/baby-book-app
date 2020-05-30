import React, { Component } from 'react';
import EventsContext from '../../contexts/EventsContext';

export default class EventForm extends Component {
  static contextType = EventsContext;
  static defaultProps = {
    onFormSubmit: () => {},
  };

  state = {
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      diaper_changes,
      feedings,
      appointments,
      stretches,
    } = event.target;

    console.log('event form submitted');
    console.log({
      diaper_changes,
      feedings,
      appointments,
      stretches,
    });
    /*
    diaper_changes.value = '';
    feedings.value = '';
    appointments.value = '';
    stretches.value = '';
    this.props.onFormSubmit();
    */
    this.props.history.push('/user');
  };

  render() {
    return (
      <form className='event-form' onSubmit={this.handleSubmit}>
        <fieldset className='diaper-changes'>
          <label htmlFor='diaper-changes'>Diaper Changes</label>
          <select name='diaper-changes'>
            <option value='blank'></option>
            <option value='wet'>Wet</option>
            <option value='dirty'>Dirty</option>
            <option value='mixed'>Mixed</option>
          </select>
        </fieldset>
        <fieldset className='feedings'>
          <label htmlFor='feedings'>Feedings</label>
          <select name='feeding-type'>
            <option value='blank'></option>
            <option value='nursing'>Nursing</option>
            <option value='pumped'>Pumped</option>
            <option value='formula'>Formula</option>
          </select>
          <input
            placeholder='0'
            type='number'
            name='feeding-amount'
          />
          <select name='measurment'>
            <option value='blank'></option>
            <option value='ml'>milliliters</option>
            <option value='oz'>ounces</option>
          </select>
        </fieldset>
        <fieldset className='appointments'>
          <label htmlFor='appointments'>Appointment</label>
          <textarea
            placeholder='Type of appointment'
            name='appointment'
          ></textarea>
          <input type='date' name='appointment' />
        </fieldset>
        <fieldset className='stretches'>
          <label htmlFor='stretches'>Stretches</label>
          <textarea
            placeholder='Type of stretch'
            name='stretches'
          ></textarea>
        </fieldset>
        <button type='submit'>Save</button>
      </form>
    );
  }
}
