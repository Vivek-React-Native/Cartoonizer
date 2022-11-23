import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get('window');

const isiPAD = viewportHeight / viewportWidth < 1.6;
const isTablet = viewportHeight / viewportWidth < 1.6;

const isIOS = Platform.OS == 'ios';
const isAndroid = Platform.OS == 'android';
const isX = isIphoneXorAbove();

function isIphoneXorAbove() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

// based on iphone 5s's scale
const scale = viewportWidth / 375;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  } else {
    if (isTablet) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  }
}

export default {
  wp,
  hp,
  normalize,
  viewportWidth,
  viewportHeight,
};
