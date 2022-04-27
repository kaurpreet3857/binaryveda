import React from 'react';
import {
    View,
    Text,
    Platform,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

const Register = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <Text>HERE register</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Profile')}
            />
        </ScrollView>
    );
};

export default Register;
