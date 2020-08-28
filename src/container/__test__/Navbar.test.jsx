import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Navbar from '../Navbar';

test('shows the children when the checkbox is checked', () => {
  const testMessage = `testing I am testing I am testing`
  render(<Navbar/>);
  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  //fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeDefined()
})

