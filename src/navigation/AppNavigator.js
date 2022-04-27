/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from '../screens/register';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Register'}>
            <Stack.Screen
                name="Register"
                component={Register}
                // options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                // options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default () => <AppNavigator />;

