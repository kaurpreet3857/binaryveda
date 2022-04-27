import { StyleSheet, Dimensions } from 'react-native';
import { FontFamily } from '../../config/typography';
import { moderateScale } from '../../config/responsiveFonts';
import colors from '../../theme/colors';

const equalBox = (Dimensions.get('screen').width-34)/5;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        paddingVertical: 10
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLayer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: moderateScale(25)
    },
    line: {
        height: 1,
        backgroundColor: colors.whiteBorder,
        marginLeft: moderateScale(21),
        marginRight: moderateScale(33),
        marginVertical: moderateScale(22)
    },
    userName: {
        fontSize: moderateScale(36),
        lineHeight: moderateScale(28),
        letterSpacing: -1.32,
        textAlign: 'center',
        fontFamily: FontFamily.condensedExtraLight,
        marginTop: 7
    },
    dashToggle: {
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(30),
        marginBottom: -10
    },
    dashText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        letterSpacing: 0,
        fontFamily: FontFamily.condensedLight,
        marginTop: 7
    },
    userIcon: {
        backgroundColor: colors.cherry,
        borderRadius: 16,
        padding: 8
    },
    profilePicSec: {
        marginTop: moderateScale(30),
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(50)
    },
    uploadText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        letterSpacing: 0,
        fontFamily: FontFamily.condensedLight,
        color: colors.cornflowerBlue
    },
    toggleBG: {
        backgroundColor: colors.midGreen,
        height: (16),
        width: moderateScale(46),
        borderRadius: 8,
        position: 'absolute',
        right: 7,
        top: 4
    },
    shadow: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
        width: 1,
        height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        width: moderateScale(22),
        height: 22,
        borderRadius: 22/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        height: 3,
        width: 3,
        backgroundColor: colors.black
    },
    pallette: {
        flexDirection: 'row',
        marginHorizontal: 17,
        marginVertical: 20
    },
    palletteText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        letterSpacing: 0,
        fontFamily: FontFamily.condensedMedium,
        color: colors.white
    },
    pallette1: {
        backgroundColor: colors.mediumPurple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    palletteCommon: {
        width: equalBox,
        height: 42
    },
    pallette2: {
        backgroundColor: colors.cherry,
    },
    pallette3: {
        backgroundColor: colors.red,
    },
    pallette4: {
        backgroundColor: colors.yellow,
    },
    pallette5: {
        backgroundColor: colors.orange,
    },
    faeBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(57)
    },
    faeBox1: {
        alignItems: 'center'
    },
    followCount: {
        fontSize: moderateScale(24),
        letterSpacing: 0,
        fontFamily: FontFamily.condensedLight,
    },
    followers: {
        fontSize: moderateScale(14),
        letterSpacing: 0,
        fontFamily: FontFamily.condensedLight,
    },
    lssBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(88)
    },
    likeCount: {
        marginLeft: 5,
        fontSize: moderateScale(18),
        letterSpacing: 0,
        fontFamily: FontFamily.ExtraLight,
    },
    uerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(32),
        marginBottom: moderateScale(21),
        alignItems: 'center'
    },
    uerBox1: {
        alignItems: 'center'
    },
    uploadsTxt: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        letterSpacing: 0,
        fontFamily: FontFamily.Medium,
    },
    exbTxt: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        letterSpacing: 0,
        fontFamily: FontFamily.Medium,
        color: colors.warmGrey,
    },
});
