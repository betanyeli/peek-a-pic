import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './ResultViewScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ErrorAnimation from './ErrorAnimation';

const ResultViewScreen = ({ route }: any) => {
    const { response } = route.params
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#000',
        }}>
            {response?.assets &&
                response?.assets.map(({ uri }: { uri: string }) => (
                    <View key={uri} style={{
                        marginVertical: 24,
                        alignItems: 'center'
                    }}>
                        <Image
                            resizeMode="cover"
                            resizeMethod="scale"
                            style={{
                                width: 200,
                                height: 200,
                            }}
                            source={{ uri: uri }}
                        />
                    </View>
                ))}

            {response?.errorCode && <ErrorAnimation />}
        </SafeAreaView>
    );
};

export default ResultViewScreen;
