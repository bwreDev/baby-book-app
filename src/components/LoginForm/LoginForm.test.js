import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
