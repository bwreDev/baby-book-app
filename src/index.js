import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { EventProvider } from './contexts/EventsContext';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <EventProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EventProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
