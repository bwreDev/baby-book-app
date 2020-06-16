import React from 'react';
import ReactDOM from 'react-dom';
import EventItem from './EventItem';
import renderer from 'react-test-renderer';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer.create(<EventItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
