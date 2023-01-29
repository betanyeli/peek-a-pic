import { Image, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import styles from './CameraViewScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonComponent } from '../../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

/* toggle includeExtra */
const includeExtra = true;
export interface Action {
    title: string;
    type: 'capture' | 'library';
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
    {
        title: 'Take Image',
        type: 'capture',
        options: {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra,
        },
    },
    {
        title: 'Select Image',
        type: 'library',
        options: {
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra,
        },
    },



];

const CameraViewScreen = () => {
    const [response, setResponse] = React.useState<any>(null);
    const navigation = useNavigation();
    const animation = useRef(null);

    const onButtonPress = React.useCallback((type: any, options: any) => {
        if (type === 'capture') {
            ImagePicker.launchCamera(options, setResponse);
        } else {
            ImagePicker.launchImageLibrary(options, setResponse);
        }
    }, []);

    useEffect(() => {
        if (response?.assets || response?.errorCode) {
            navigation.navigate('ResultView' as never, { response } as never)
        }
    }, [response])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#000001',
            alignContent: 'center',
            alignItems: 'center',
            padding: 40
        }}>

            <AnimatedLottieView
                autoPlay
                ref={animation}
                source={require('../../assets/animations/camera.json')}
            />

            <View style={{ justifyContent: 'flex-start' }}>
                {actions.map(({ title, type, options }) => {
                    return (
                        <ButtonComponent
                            icon={type === 'capture' ? 'camera' : 'image-size-select-actual'}
                            key={title}
                            onPress={() => onButtonPress(type, options)}>
                            {title}
                        </ButtonComponent>
                    );
                })}
            </View>

        </View >
    );
};

export default CameraViewScreen;
