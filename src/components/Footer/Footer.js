import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer role='content-info'>
        <Link to='/'>Home</Link>
      </footer>
    );
  }
}
