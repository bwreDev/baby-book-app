import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import Navbar from '../../components/Navbar/Navbar';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const { username, password } = event.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.props.onLoginSuccess();
        this.props.history.push('/user');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <Navbar />
        <form
          className='LoginForm'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <fieldset>
            <h3>Login</h3>
            <label htmlFor='LoginForm__username'></label>
            <input
              name='username'
              type='text'
              placeholder='Username'
              id='LoginForm__username'
              required
            />
            <label htmlFor='LoginForm__password'></label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              id='LoginForm__password'
            />
          </fieldset>
          <button className='login-button' type='submit'>
            Login
          </button>
        </form>
      </>
    );
  }
}
