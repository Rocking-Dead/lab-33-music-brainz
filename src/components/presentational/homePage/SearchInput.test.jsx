import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import SearchBar from './SearchInput';


describe('SearchBar component', () => {
  afterEach(() => cleanup());
  it('renders SearchBar', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SearchBar search={''} handleSearch={jest.fn()} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
