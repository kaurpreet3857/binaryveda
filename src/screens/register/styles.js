import { StyleSheet } from 'react-native';
import { FontFamily, FontWeight } from '../../config/typography';
import { moderateScale } from '../../config/responsiveFonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  logoSetting: {
    paddingHorizontal: moderateScale(24)
  },
  desc: {
    marginTop: 33,
    fontSize: moderateScale(16),
    textAlign: 'center',
    lineHeight: moderateScale(24),
    letterSpacing: -0.6,
    fontFamily: FontFamily.ExtraLight,
  },
  regBtnBox: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regBtnOuter: {
    backgroundColor: colors.tomato,
    marginRight: 5,
    padding: 10,
    borderRadius: 9
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regBtnText: {
    marginLeft: 5,
    fontSize: moderateScale(32),
    lineHeight: moderateScale(28),
    letterSpacing: -1.17,
    fontFamily: FontFamily.condensedExtraLight,
    color: colors.white
  },
  asCollector: {
    fontSize: moderateScale(32),
    lineHeight: moderateScale(28),
    letterSpacing: -1.17,
    fontFamily: FontFamily.condensedExtraLight,
  },
  trackAppOuter: {
    marginTop: 33,
  },
  trackApp: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(28),
    letterSpacing: -0.88,
    fontFamily: FontFamily.condensedExtraLight,
    color: colors.cornflowerBlue,
    marginLeft: 11
  },
  flatlistTitle: {
    fontSize: moderateScale(28),
    lineHeight: moderateScale(32),
    letterSpacing: 0,
    fontFamily: FontFamily.condensedLight,
    marginTop: 29,
    marginBottom: 25
  },
  flatlistDesc: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontFamily: FontFamily.ExtraLight,
  },
  flatlistMargin: {
    marginLeft: moderateScale(36),
    marginRight: moderateScale(29),
    marginVertical: moderateScale(68)
  },
  line: {
    height: 1,
    backgroundColor: colors.whiteBorder,
    marginLeft: moderateScale(21),
    marginRight: moderateScale(33),
    marginVertical: moderateScale(22)
  },
  copyrightContent: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontFamily: FontFamily.condensedLight,
    marginLeft: 5.1
  },
  aboutUs: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(39),
    letterSpacing: 0,
    fontFamily: FontFamily.condensedMedium,
    marginLeft: 5.1
  }
});
