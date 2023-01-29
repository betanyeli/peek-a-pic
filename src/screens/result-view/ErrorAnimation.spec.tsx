import ErrorAnimation from './ErrorAnimation';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

describe('ErrorAnimation test', () => {
  it('Should match with snapshot', () => {
    const { toJSON } = render(<ErrorAnimation />);
    waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});
