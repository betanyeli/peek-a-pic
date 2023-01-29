import { Image, View } from 'react-native';
import React from 'react';
import styles from './FooterComponent.styles';

type FooterComponentProps = {
  children: JSX.Element;
  showLogo: boolean;
};
const FooterComponent = ({ children, showLogo }: FooterComponentProps) => {
  return (
    <View style={styles.container}>
      {children}
      {showLogo && (
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      )}
    </View>
  );
};

export default FooterComponent;
