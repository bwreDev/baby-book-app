import React, { Component } from 'react';
import EventsContext from '../../contexts/EventsContext';
import { Redirect } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends Component {
  static contextType = EventsContext;
  static defaultProps = {
    onLoginSuccess: () => {
      return <Redirect to={`/user`} />;
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target;

    AuthApiService.postLogin({
      user_name: username.value,
      password: password.value,
    }).then((data) => {
      console.log(data);
    });

    console.log('login form submitted');
    console.log({
      user_name: username.value,
      password: password.value,
    });

    username.value = '';
    password.value = '';
    this.props.history.push('/user');
  };

  render() {
    return (
      <form className='LoginForm' onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor='LoginForm__username'>Username:</label>
          <input
            name='username'
            type='text'
            id='LoginForm__username'
            required
          />
          <label htmlFor='LoginForm__password'>Password:</label>
          <input
            name='password'
            type='password'
            id='LoginForm__password'
          />
        </fieldset>
        <button type='submit'>Login</button>
      </form>
    );
  }
}
