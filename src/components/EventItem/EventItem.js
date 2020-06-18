import React from 'react';
import moment from 'moment';
import './EventItem.css';

export default function EventItem(props) {
  const cleanDate = moment(props.event.date_added).format(
    'MMM Do YY, h:mm a'
  );

  return (
    <>
      <h4 className='event-item'>{props.event.content}</h4>
      <span className='event-post-time'>
        {props.event.date_added ? cleanDate : ''}
      </span>
    </>
  );
}

EventItem.defaultProps = {
  event: {},
};
