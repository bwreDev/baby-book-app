import React from 'react';

export default function EventItem(props) {
  return (
    <>
      <h4>{props.event.type}</h4>
      <ul>
        <li>{props.event.content}</li>
        <li>{props.event.date}</li>
      </ul>
    </>
  );
}
