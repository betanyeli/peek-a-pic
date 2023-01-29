import React from 'react';
import CameraViewScreen from '../screens/camera-view/CameraViewScreen';
import ResultViewScreen from '../screens/result-view/ResultViewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Navigation() {
    const CameraViewStack = createNativeStackNavigator();

    return (
        <CameraViewStack.Navigator screenOptions={{ headerShown: false }}>
            <CameraViewStack.Screen name="CameraView" component={CameraViewScreen} />
            <CameraViewStack.Screen name="ResultView" component={ResultViewScreen} />
        </CameraViewStack.Navigator>
    );
}

export default Navigation
