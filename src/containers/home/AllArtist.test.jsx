import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllArtists from './AllArtists';
import { ThemeModeProvider } from '../../state/themeModeContext';


describe('Page All Artists ', () => {
  afterEach(() => cleanup());

  it('displays all of the artist', () => {
    render(
      <ThemeModeProvider>
        <MemoryRouter>
          <AllArtists match={{ params: { artistName: 'beatles' } }}/>
        </MemoryRouter>
      </ThemeModeProvider>);

    const form = screen.getByText('Search');

    return waitFor(() => {
      expect(form).not.toBeEmptyDOMElement();
    });
  });

});
