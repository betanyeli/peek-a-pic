import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ResultViewScreen from './ResultViewScreen';

describe('ResultViewScreen test', () => {
  it('Should match with snapshot', () => {
    const mockedParams = {
      route: { params: { response: {} } },
      navigation: '',
    };
    const { toJSON } = render(<ResultViewScreen {...mockedParams} />);
    waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});
