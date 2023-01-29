import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import styles from './ErrorAnimation.styles';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const ErrorAnimation = () => {
  const animation = useRef(null);
  const title = 'Oops! 🤯';
  const subtitle = 'Something went wrong';
  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        source={require('../../assets/animations/cat-error.json')}
        style={styles.lottie}
      />

      <View style={styles.textContainer}>
        <Text style={[styles.common, styles.title]}>{title}</Text>
        <Text style={[styles.common, styles.subtitle]}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ErrorAnimation;
