
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

const CameraAnimation = () => {
    const animation = useRef(null);
    return (
        <LottieView
            autoPlay
            ref={animation}
            source={require('../../assets/animations/camera.json')}
            style={{ alignContent: 'flex-start', justifyContent: 'flex-start', width: 400, height: 400 }}

        />
    )
};

export default CameraAnimation