import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraViewScreen from '../screens/camera-view/CameraViewScreen';
import { Text, View } from 'react-native';
import ResultViewScreen from '../screens/result-view/ResultViewScreen';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={({ navigation }) => ({
                title: 'PeekAPic',
                tabBarLabel: 'Get a pic',
                tabBarIcon: () => <View><Text>Icon</Text></View>,
            })} name="CameraView" component={CameraViewScreen} />
            <Tab.Screen options={({ navigation }) => ({
                title: 'Result',
                tabBarLabel: 'Result',
                tabBarIcon: () => <View><Text>Icon</Text></View>,
            })} name='ResultView' component={ResultViewScreen} />
        </Tab.Navigator>
    );
}

export default Navigation
