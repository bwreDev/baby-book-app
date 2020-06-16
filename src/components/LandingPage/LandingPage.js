import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Baby Book!</h1>
          <h2>Organize your newborns life!</h2>
          <h3>Record important events in your newborns life!</h3>
        </header>
      </>
    );
  }
}
