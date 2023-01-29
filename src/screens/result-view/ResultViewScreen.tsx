import { Image, Dimensions, View } from 'react-native';
import React, { useState } from 'react';
import styles from './ResultViewScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ErrorAnimation from './ErrorAnimation';
import { ActivityIndicator, Button } from 'react-native-paper';
import SharedSocialMediaComponent from '../../components/shared-social-media/SharedSocialMediaComponent';
import FooterComponent from '../../components/footer/FooterComponent';

const ResultViewScreen = ({ route, navigation }: any) => {
  const { response } = route.params;
  const widthImg = Dimensions.get('window').width;
  const heightImg = 250;
  const labelButton: string = response?.errorCode ? 'Try again' : 'Go back';
  const defaultImg: string =
    'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80';

  const [loading, setIsLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ActivityIndicator animating />}
      {response?.errorCode && <ErrorAnimation />}
      {response?.assets &&
        response?.assets.map(
          ({ uri, width }: { uri: string; width: number }) => (
            <View key={uri} style={styles.response}>
              <Image
                resizeMode="contain"
                resizeMethod="scale"
                style={{
                  width: widthImg - 48,
                  height: heightImg,
                }}
                source={{ uri: width > 0 ? uri : defaultImg }}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
              />
              <SharedSocialMediaComponent />
            </View>
          ),
        )}

      <FooterComponent showLogo={false}>
        <Button
          mode="contained"
          icon="rotate-left"
          onPress={() => {
            navigation.goBack();
          }}>
          {labelButton}
        </Button>
      </FooterComponent>
    </SafeAreaView>
  );
};

export default ResultViewScreen;
