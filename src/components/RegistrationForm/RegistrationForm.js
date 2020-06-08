import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import Navbar from '../../components/Navbar/Navbar';

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
            <label htmlFor='RegistrationForm__username'>
              username
            </label>
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
      </>
    );
  }
}
