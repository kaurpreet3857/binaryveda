import { StyleSheet } from 'react-native';
import { FontFamily, FontWeight } from '../../config/typography';
import { moderateScale } from '../../config/responsiveFonts';
import Colors from '../../theme/colors';

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
    backgroundColor: Colors.tomato,
    marginRight: 5,
    padding: 10
  },
  regBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regBtnText: {
    marginLeft: 5,
    fontSize: moderateScale(32),
    textAlign: 'center',
    lineHeight: moderateScale(28),
    letterSpacing: -1.17,
    fontFamily: FontFamily.condensedExtraLight,
    color: Colors.white
  }
});
