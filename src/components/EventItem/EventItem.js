import React from 'react';

export default function EventItem(props) {
  return (
    <>
      <h4>{props.event.type}</h4>
      {props.event.content}
      {props.event.date}
    </>
  );
}
