import React, { Component } from 'react';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = {
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      first_name,
      last_name,
      username,
      password,
    } = event.target;

    console.log('registration form submitted');
    console.log({ first_name, last_name, username, password });

    first_name.value = '';
    last_name.value = '';
    username.value = '';
    password.value = '';
    this.props.history.push('/user');
  };

  render() {
    return (
      <form className='RegistrationForm' onSubmit={this.handleSubmit}>
        <fieldset className='first_name'>
          <label htmlFor='RegistrationForm__first_name'>
            First name
          </label>
          <input
            name='first_name'
            type='text'
            required
            id='RegistrationForm__first_name'
          ></input>
          <label htmlFor='RegistrationForm__last_name'>
            Last name
          </label>
          <input
            name='last_name'
            type='text'
            required
            id='RegistrationForm__last_name'
          ></input>
          <label htmlFor='RegistrationForm__username'>Username</label>
          <input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'
          ></input>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            required
            id='RegistrationForm__password'
          ></input>
        </fieldset>
        <button type='submit'>Register</button>
      </form>
    );
  }
}
