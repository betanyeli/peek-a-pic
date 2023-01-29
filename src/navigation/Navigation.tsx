import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraViewScreen from '../screens/camera-view/CameraViewScreen';
import { Text, View } from 'react-native';
import ResultViewScreen from '../screens/result-view/ResultViewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

function Navigation() {
    const CameraViewStack = createNativeStackNavigator();

    function CameraViewStackScreen() {
        return (
            <CameraViewStack.Navigator>
                <CameraViewStack.Screen name="CameraView" component={CameraViewScreen} />
                <CameraViewStack.Screen name="ResultView" component={ResultViewScreen} />
            </CameraViewStack.Navigator>
        );
    }

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={({ navigation }) => ({
                title: 'PeekAPic',
                tabBarLabel: 'Home',
                tabBarIcon: () => <View><Text>Icon</Text></View>,
            })} name="Camera" component={CameraViewStackScreen} />

        </Tab.Navigator>
    );
}

export default Navigation
