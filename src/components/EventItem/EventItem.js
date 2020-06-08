import React from 'react';

export default function EventItem(props) {
  return (
    <>
      <ul>
        <li>{props.event.content}</li>
        <span>{props.event.date_added}</span>
      </ul>
    </>
  );
}
