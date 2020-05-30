import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import EventsContext from '../../contexts/EventsContext';

export default class Navbar extends Component {
  static contextType = EventsContext;
  handleLogoutClick = () => {
    return <Redirect to='/' />;
  };

  renderLogoutLink() {
    return (
      <div className='Navbar__logged-in'>
        <li>
          <NavLink onClick={this.handleLogoutClick} to='/'>
            Logout
          </NavLink>
        </li>
      </div>
    );
  }

  renderAddEventLink() {
    return (
      <div className='Navbar-Event__logged-in'>
        <li>
          <NavLink to='/event'>Add Event</NavLink>
        </li>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Navbar__not-logged-in'>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Log in</NavLink>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav role='navigation' className='navbar'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          {this.renderAddEventLink()}
          {this.renderLoginLink()}
          {this.renderLogoutLink()}
          {/*Dynamic NavBar based on login 
          this.context.user
            ? this.renderLogoutLink() && this.renderAddEventLink()
          : this.renderLoginLink()*/}
        </ul>
      </nav>
    );
  }
}
