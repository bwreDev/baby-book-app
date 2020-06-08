import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import Navbar from '../../components/Navbar/Navbar';

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
            <label htmlFor='LoginForm__username'>username:</label>
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
      </>
    );
  }
}
