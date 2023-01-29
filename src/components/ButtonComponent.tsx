import React from 'react';
import { Button } from 'react-native-paper';

interface Props {
    onPress: () => void;
    icon: string;
}

export function ButtonComponent({
    onPress,
    children,
    icon = "camera"
}: React.PropsWithChildren<Props>) {
    return (
        <Button icon={icon} mode="contained-tonal" onPress={onPress} style={{ margin: 16 }}
        >
            {children}
        </Button>
    );
}


