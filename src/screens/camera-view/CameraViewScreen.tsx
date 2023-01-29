import { View } from 'react-native';
import React, { useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ButtonComponent } from '../../components/button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import CameraAnimation from './CameraAnimation';
import styles from './CameraViewScreen.styles';
import { Text } from 'react-native-paper';
import FooterComponent from '../../components/footer/FooterComponent';
import { actions } from '../../data/actions';

const CameraViewScreen = () => {
  const [response, setResponse] = React.useState<any>(null);
  const navigation = useNavigation();
  const titleApp = 'PeekAPic';
  const version = `${titleApp} by Beta v0.1 `;

  useEffect(() => {
    if (response?.assets || response?.errorCode) {
      navigation.navigate('ResultView' as never, { response } as never);
    }
  }, [response, navigation]);

  const onButtonPress = React.useCallback((type: any, options: any) => {
    return type === 'capture'
      ? launchCamera(options, setResponse)
      : launchImageLibrary(options, setResponse);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>{titleApp}</Text>
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

      <FooterComponent showLogo>
        <Text style={styles.version}>{version}</Text>
      </FooterComponent>
    </View>
  );
};

export default CameraViewScreen;
