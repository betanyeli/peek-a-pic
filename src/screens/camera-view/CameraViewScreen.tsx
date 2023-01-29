import { View } from 'react-native';
import React, { useEffect } from 'react';
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
import { ButtonComponent } from '../../components/button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import CameraAnimation from './CameraAnimation';
import styles from './CameraViewScreen.styles';
import { Text } from 'react-native-paper';
import FooterComponent from '../../components/footer/FooterComponent';


/* toggle includeExtra */
const includeExtra = true;

export interface Action {
    title: string;
    type: 'capture' | 'library';
    options: CameraOptions | ImageLibraryOptions;
}

const actions: Action[] = [
    {
        title: 'Take a Pic',
        type: 'capture',
        options: {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra,
        },
    },
    {
        title: 'Peek a Pic',
        type: 'library',
        options: {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra,
        },
    },

];

const CameraViewScreen = () => {
    const [response, setResponse] = React.useState<any>(null);
    const navigation = useNavigation();

    useEffect(() => {
        if (response?.assets || response?.errorCode) {
            navigation.navigate('ResultView' as never, { response } as never)
        }
    }, [response]);

    const onButtonPress = React.useCallback((type: any, options: any) => {
        return type === 'capture' ? launchCamera(options, setResponse) : launchImageLibrary(options, setResponse)
    }, []);

    return (
        <View style={styles.container}>
            <CameraAnimation />
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

            <FooterComponent>
                <Text style={{ color: '#ffffff' }}>PeekAPic by Beta v0.1 </Text>
            </FooterComponent>

        </View >
    );
};

export default CameraViewScreen;
