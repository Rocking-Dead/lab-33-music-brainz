import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './SearchControls';


describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(
      <Search 
        onChange={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
