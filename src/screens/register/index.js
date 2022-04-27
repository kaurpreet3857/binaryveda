import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Logo from '../../../assets/svg/agc.svg';
import LandingBanner from '../../../assets/svg/landingBanner.svg';
import { moderateScale } from '../../config/responsiveFonts';

import styles from './styles';

const Register = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <Logo />
            <LandingBanner width={Dimensions.get('screen').width} height={moderateScale(329)} />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Profile')}
            />
        </ScrollView>
    );
};

export default Register;
