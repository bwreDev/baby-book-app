import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Baby Book!</h1>
          <h2>Organize your newborns life!</h2>
        </header>
        <section>
          <Link to='/login'>Login</Link>
          <span> - </span>
          <Link to='/register'>Register</Link>
        </section>
        <section>
          <h3>Record important events in your newborns life!</h3>
          <p>
            Add feedings, diaper changes, appointments, and stretches
            to your profile!
          </p>
        </section>
      </>
    );
  }
}
