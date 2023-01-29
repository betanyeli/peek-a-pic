import React from 'react';
import { Button } from 'react-native-paper';

interface Props {
    onPress: () => void;
    icon: string;
    testID?: string;
}

export function ButtonComponent({
    onPress,
    children,
    icon = "camera",
    testID = "button"
}: React.PropsWithChildren<Props>) {
    return (
        <Button testID={testID} icon={icon} mode="contained-tonal" onPress={onPress} style={{ margin: 16 }}
        >
            {children}
        </Button>
    );
}


