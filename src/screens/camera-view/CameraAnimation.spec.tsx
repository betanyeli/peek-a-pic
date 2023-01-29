import CameraAnimation from './CameraAnimation';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

describe('CameraAnimation test', () => {
  it('Should match with snapshot', () => {
    const { toJSON } = render(<CameraAnimation />);
    waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});
