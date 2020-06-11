import React from 'react';
import moment from 'moment';

export default function EventItem(props) {
  const cleanDate = moment(props.event.date_added).format(
    'MMM Do YY, h:mm a'
  );

  return (
    <>
      <h3>{props.event.content}</h3>
      <span>Posted: {cleanDate}</span>
    </>
  );
}
