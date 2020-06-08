import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';
import IdleService from '../../services/idle-service';

export default class Navbar extends Component {
  state = {
    user: null,
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className='Navbar__logged-in'>
        <li>
          <Link to='/user'>Profile</Link>
        </li>
        <li>
          <Link to='/event'>Add Event</Link>
        </li>
        <li>
          <Link to='/' onClick={this.handleLogoutClick}>
            Logout
          </Link>
        </li>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Navbar__not-logged-in'>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav role='navigation' className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </ul>
      </nav>
    );
  }
}
