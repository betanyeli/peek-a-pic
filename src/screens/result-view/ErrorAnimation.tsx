
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import styles from './ResultViewScreen.styles';

const ErrorAnimation = () => {
    const animation = useRef(null);
    return (
        <LottieView
            autoPlay
            ref={animation}
            source={require('../../assets/animations/cat-error.json')}
            style={styles.lottie}

        />
    )
};

export default ErrorAnimation