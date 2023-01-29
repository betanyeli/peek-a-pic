import { View, Linking, Alert } from 'react-native';
import React from 'react';
import styles from './SharedSocialMediaComponent.styles';
import {
  shareSocialMediaData,
  shareSocialMediaDataItem,
} from '../../data/sharedSocialMediaData';
import { IconButton, Text } from 'react-native-paper';

const SharedSocialMediaComponent = () => {
  const handleOpenUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`😱 Try again later to open this URL: ${url}`);
    }
  };

  const title = 'This pic rocks!';
  const subtitle =
    'Share with your friends or better...\nGive feedback to the creator 🥰';
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={[styles.color, styles.title]}>{title}</Text>
        <Text style={[styles.color, styles.subtitle]}>{subtitle}</Text>
      </View>
      <View style={styles.iconContainer}>
        {shareSocialMediaData.map(
          ({ id, icon, url }: shareSocialMediaDataItem) => {
            return (
              <IconButton
                testID="iconButton"
                key={id}
                mode="contained"
                icon={icon}
                onPress={() => {
                  handleOpenUrl(url);
                }}
              />
            );
          },
        )}
      </View>
    </>
  );
};

export default SharedSocialMediaComponent;
