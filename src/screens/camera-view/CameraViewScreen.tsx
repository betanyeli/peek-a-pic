import { View } from 'react-native';
import React, { useEffect } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { ButtonComponent } from '../../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import CameraAnimation from './CameraAnimation';


/* toggle includeExtra */
const includeExtra = true;

export interface Action {
    title: string;
    type: 'capture' | 'library';
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
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
            backgroundColor: '#000000',
            alignContent: 'center',
            alignItems: 'center',
            padding: 40
        }}>
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



        </View >
    );
};

export default CameraViewScreen;
