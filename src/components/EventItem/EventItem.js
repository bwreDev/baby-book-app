import React from 'react';
import moment from 'moment';
import './EventItem.css';

export default function EventItem(props) {
  const cleanDate = moment(props.event.date_added).format(
    'MMM Do YY, h:mm a'
  );

  return (
    <>
      <h3 className='event-item'>{props.event.content}</h3>
      <span>Posted: {props.event.date_added ? cleanDate : ''}</span>
    </>
  );
}

EventItem.defaultProps = {
  event: {},
};
