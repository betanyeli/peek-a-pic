import React from 'react';
import { Button } from 'react-native-paper';

interface Props {
  onPress: () => void;
  icon: string;
  testID?: string;
}

const styles = { margin: 16 };

export function ButtonComponent({
  onPress,
  children,
  icon = 'camera',
  testID = 'button',
}: React.PropsWithChildren<Props>) {
  return (
    <Button
      testID={testID}
      icon={icon}
      mode="contained-tonal"
      onPress={onPress}
      style={styles}>
      {children}
    </Button>
  );
}
