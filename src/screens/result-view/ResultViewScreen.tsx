import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './ResultViewScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

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
                            source={{ uri: uri || 'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' }}
                        />
                    </View>
                ))}

            {response?.errorCode && <View style={{
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
                    source={{ uri: 'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' }}
                />
            </View>}
        </SafeAreaView>
    );
};

export default ResultViewScreen;
