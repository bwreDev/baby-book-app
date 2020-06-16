import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import Navbar from '../../components/Navbar/Navbar';
import './RegistrationForm.css';

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

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
    })
      .then((user) => {
        first_name.value = '';
        last_name.value = '';
        username.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
        this.props.history.push('/login');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <form
          className='RegistrationForm'
          onSubmit={this.handleSubmit}
        >
          <fieldset className='Registration-input'>
            <h3>Register</h3>
            <label htmlFor='RegistrationForm__first_name'></label>
            <input
              name='first_name'
              type='text'
              placeholder='First Name'
              required
              id='RegistrationForm__first_name'
            ></input>
            <label htmlFor='RegistrationForm__last_name'></label>
            <input
              name='last_name'
              type='text'
              placeholder='Last Name'
              required
              id='RegistrationForm__last_name'
            ></input>
            <label htmlFor='RegistrationForm__username'></label>
            <input
              name='username'
              type='text'
              placeholder='Username'
              required
              id='RegistrationForm__username'
            ></input>
            <label htmlFor='password'></label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              required
              id='RegistrationForm__password'
            ></input>
          </fieldset>
          <button className='registration-button' type='submit'>
            Register
          </button>
        </form>
      </>
    );
  }
}
