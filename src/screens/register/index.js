import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Dimensions,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import Logo from '../../../assets/svg/agc.svg';

import User from '../../../assets/svg/loremIpsumSvgs/user.svg';
import Phone from '../../../assets/svg/loremIpsumSvgs/phone.svg';
import Share from '../../../assets/svg/loremIpsumSvgs/share.svg';
import Star from '../../../assets/svg/loremIpsumSvgs/star.svg';
import Book from '../../../assets/svg/loremIpsumSvgs/book.svg';
import Flag from '../../../assets/svg/loremIpsumSvgs/flag.svg';
import Signal from '../../../assets/svg/loremIpsumSvgs/signal.svg';
import Wire from '../../../assets/svg/loremIpsumSvgs/wire.svg';

import WhiteArrow from '../../../assets/svg/whiteArrow.svg';
import BlueArrow from '../../../assets/svg/blueArrow.svg';
import AgcHorizontal from '../../../assets/svg/agcHorizontal.svg';
import Copyright from '../../../assets/svg/copyright.svg';

import styles from './styles';
import colors from '../../theme/colors';

const loremIpsumText = [
    {
        svg: <User />,
        id: 1,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Phone />,
        id: 2,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Share />,
        id: 3,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Star />,
        id: 4,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Book />,
        id: 5,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Flag />,
        id: 6,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Signal />,
        id: 7,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        svg: <Wire />,
        id: 8,
        title: 'lorem ipsum \n is used',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
]

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.logoSetting}><Logo /></View>

                <Image
                    style={{
                        width: Dimensions.get('screen').width,
                        height: 365
                    }}
                    source={require('../../../assets/images/landingBanner.png')}
                />

                <Text style={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit
                </Text>

                <View style={styles.regBtnBox}>
                    <View style={styles.regBtnOuter}>
                        <TouchableOpacity
                            style={styles.flexRow}
                            onPress={() => {
                                navigation.push('Profile');
                            }}
                        >
                            <WhiteArrow />
                            <Text style={styles.regBtnText}>register</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.asCollector}>me as a collector</Text>
                </View>

                <View style={[styles.trackAppOuter, styles.flexRow]}>
                    <BlueArrow />
                    <Text style={styles.trackApp}>
                        track my application
                    </Text>
                </View>

                <FlatList
                    data={loremIpsumText}
                    contentContainerStyle={styles.flatlistMargin}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                        <View
                            style={{
                                height: 68,
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View key={item.id}>
                            <View style={styles.flatlistSvg}>{item.svg}
                            </View>
                            <Text style={styles.flatlistTitle}>
                                {item.title}
                            </Text>
                            <Text style={styles.flatlistDesc}>
                                {item.desc}
                            </Text>
                        </View>
                    )}
                />

                <View style={[styles.flexRow, styles.icons]}>
                    <Image source={require('../../../assets/images/fbIcon/fbIcon.jpg')} />
                    <View style={{width: 10}} />
                    <Image source={require('../../../assets/images/igIcon/igIcon.jpg')} />
                </View>

                <View style={styles.line} />

                <View style={{alignItems: 'center'}}>
                    <AgcHorizontal height={28} width={255} />
                    <View style={[styles.flexRow, {marginTop: 18}]}>
                        <Text style={styles.aboutUs}>
                            About Us.
                            {'\n'}
                            Team.
                            {'\n'}
                            Reach us.
                        </Text>
                        <View style={{width: 120}} />
                        <Text style={styles.aboutUs}>
                            Affiliattions.
                            {'\n'}
                            Disclaimers.
                            {'\n'}
                            Privacy Policy.
                        </Text>
                    </View>
                </View>

                <View style={styles.line} />

                <View style={[styles.flexRow]}>
                    <Copyright />
                    <Text style={[styles.copyrightContent]}>
                        Content Copyright reserved.
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
