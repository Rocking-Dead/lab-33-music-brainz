import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReleasePage from '../ReleasePage/ReleasePage';

describe('ReleasePage component', () => {
  afterEach(() => cleanup());
  it('renders ReleasePage', () => {
    const { asFragment } = render(<ReleasePage releases={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
