import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';

import BlueEdit from '../../../assets/svg/blueEdit.svg';
import Share from '../../../assets/svg/share.svg';
import BlueUpload from '../../../assets/svg/blueUpload.svg';
import Heart from '../../../assets/svg/heart.svg';
import ShortAGC from '../../../assets/svg/shortAGC.svg';
import WhiteUserIcon from '../../../assets/svg/whiteUserIcon.svg';
import Revenue from '../../../assets/svg/revenue.svg';
import Exhibitions from '../../../assets/svg/exhibitions.svg';
import PlusIcon from '../../../assets/svg/plusIcon.svg';
import BlackUpload from '../../../assets/svg/blackUpload.svg';
import UpArrow from '../../../assets/svg/upArrow.svg';
import Menu from '../../../assets/svg/menu.svg';

import styles from './styles';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.topLayer}>
                    <ShortAGC />

                    <View />

                    <View style={styles.userIcon}>
                        <WhiteUserIcon />
                    </View>
                    <PlusIcon />
                    <Menu />

                </View>

                <View style={[styles.flexRow, styles.profilePicSec]}>
                    <TouchableOpacity disabled>
                        <BlueUpload />
                        <Text style={styles.uploadText}>Upload</Text>
                    </TouchableOpacity>

                    <Image source={require('../../../assets/images/profilePlaceholder/profilePlaceholder.jpg')} style={{width: 127, height: 127}} />

                    <TouchableOpacity disabled>
                        <BlueEdit />
                        <Text style={styles.uploadText}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.userName}>john.doe</Text>

                <View style={[styles.flexRow, styles.dashToggle]}>
                    <Text style={styles.dashText}>
                        My dashboard
                    </Text>
                    <View style={styles.greenToggle}>
                        <View style={styles.toggleBG} />
                        <View style={styles.shadow}>
                            <View style={styles.dot} />
                        </View>
                    </View>
                </View>

                <View style={styles.line} />

                <View style={styles.faeBox}>
                    <View style={styles.faeBox1}>
                        <Text style={styles.followCount}>2.3K</Text>
                        <Text style={styles.followers}>Followers</Text>
                    </View>

                    <View style={styles.faeBox1}>
                        <Text style={styles.followCount}>50</Text>
                        <Text style={styles.followers}>Artworks</Text>
                    </View>

                    <View style={styles.faeBox1}>
                        <Text style={styles.followCount}>21</Text>
                        <Text style={styles.followers}>Exhibitions</Text>
                    </View>
                </View>

                <View style={styles.line} />

                <View style={styles.lssBox}>
                    <View style={styles.flexRow}>
                        <Heart />
                        <Text style={styles.likeCount}>120</Text>
                    </View>

                    <View style={styles.flexRow}>
                        <UpArrow />
                        <Text style={styles.likeCount}>43K</Text>
                    </View>

                    <View style={styles.flexRow}>
                        <Share />
                        <Text style={styles.likeCount}>2.3K</Text>
                    </View>
                </View>

                <View style={styles.pallette}>
                    <View style={[styles.palletteCommon, styles.pallette1]}>
                        <Text style={styles.palletteText}>
                            pallette
                        </Text>
                    </View>
                    <View style={[styles.palletteCommon, styles.pallette2]} />
                    <View style={[styles.palletteCommon, styles.pallette3]} />
                    <View style={[styles.palletteCommon, styles.pallette4]} />
                    <View style={[styles.palletteCommon, styles.pallette5]} />
                </View>

                <View style={[styles.uerBox]}>
                    <View style={styles.uerBox1}>
                        <BlackUpload />
                        <Text style={styles.uploadsTxt}>Uploads</Text>
                    </View>

                    <View style={styles.uerBox1}>
                        <Exhibitions />
                        <Text style={styles.exbTxt}>Exhibitions</Text>
                    </View>

                    <View style={styles.uerBox1}>
                        <Revenue />
                        <Text style={styles.exbTxt}>Revenue</Text>
                    </View>
                </View>

                <FlatList
                    style={{marginHorizontal: 18, paddingBottom: 20}}
                    data={[
                        require('../../../assets/images/landingBanner.png'),
                        require('../../../assets/images/landingBanner.png'),
                        require('../../../assets/images/landingBanner.png'),
                        require('../../../assets/images/landingBanner.png'),
                        require('../../../assets/images/landingBanner.png'),
                        require('../../../assets/images/landingBanner.png'),
                    ]}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                        <View
                            style={{
                                height: 6,
                            }}
                        />
                    )}
                    numColumns={2}
                    keyExtractor={(item) => item}
                    renderItem={({ item, index }) => (
                        <View
                            key={item.id}
                            style={styles.profilePost}>
                            <Image
                                source={item}
                                style={{
                                    width: (Dimensions.get('screen').width-36)/2,
                                    height: 167,
                                    marginRight: 10
                                }}
                            />
                        </View>
                    )}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
