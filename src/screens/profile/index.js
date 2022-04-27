import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Platform,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

const Profile = () => {
    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <Text>HERE profile</Text>
        </ScrollView>
    );
};

export default Profile;
