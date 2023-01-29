
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import styles from './CameraViewScreen.styles';

const CameraAnimation = () => {
    const animation = useRef(null);
    return (
        <LottieView
            autoPlay
            ref={animation}
            source={require('../../assets/animations/camera.json')}
            style={styles.lottie}

        />
    )
};

export default CameraAnimation