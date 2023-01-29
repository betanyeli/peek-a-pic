import { render, waitFor } from '@testing-library/react-native';
import { View } from 'react-native';
import FooterComponent from './FooterComponent';
import React from 'react';

describe('FooterComponenttest', () => {
  it('Should be match with snapshot with logo', () => {
    //Arrange
    const children = <View />;
    const { toJSON } = render(<FooterComponent showLogo children={children} />);

    // Act
    waitFor(() => {
      expect(toJSON).toMatchSnapshot();
    });
  });

  it('Should be match with snapshot without logo', () => {
    //Arrange
    const children = <View />;
    const { toJSON } = render(
      <FooterComponent showLogo={false} children={children} />,
    );

    // Act
    waitFor(() => {
      expect(toJSON).toMatchSnapshot();
    });
  });
});
