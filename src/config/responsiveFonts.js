'use strict';
import { Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const heightScale = height;
const scale = (size) => (width / guidelineBaseWidth) * size;

const moderateScale = (size) => {
  if (Platform.OS === 'android') {
    return RFValue(size, heightScale);
  } else {
    return size + (scale(size) - size) * 0.4;
  }
};

export {
  moderateScale,
};
