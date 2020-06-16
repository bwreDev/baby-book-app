import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
