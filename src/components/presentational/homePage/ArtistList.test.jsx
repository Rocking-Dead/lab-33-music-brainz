import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeModeProvider } from '../../../state/themeModeContext';
import { MemoryRouter } from 'react-router-dom';
import ArtistList from './ArtistList';

describe ('ArtistList component', () => {
  afterEach(() => cleanup());
  it('renders ArtistList', () => {
    const { asFragment } = render(
      <ThemeModeProvider>
        <MemoryRouter>
          <ArtistList artists={[]}>
          </ArtistList>
        </MemoryRouter>
      </ThemeModeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
