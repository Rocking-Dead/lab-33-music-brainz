import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Lyrics from '../lyrics/Lyrics';

describe('Lyrics component', () => {
  afterEach(() => cleanup());
  it('renders Lyrics', () => {
    const { asFragment } = render(<Lyrics lyrics={''} />);
    expect(asFragment()).toMatchSnapshot();
  });
});


