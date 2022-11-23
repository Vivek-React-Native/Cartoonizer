import React from 'react';
import { Text } from 'react-native';
import { Colors, Fonts, Responsive } from '../Constants';

const FontText = ({
  children,
  style,
  color,
  size,
  name,
  lineHeightFactor,
  lines,
  opacity,
  pTop,
  pLeft,
  pRight,
  pBottom,
  onPress,
  textAlign,
  textDecoration,
  onLayout,
  mTop,
  mLeft,
  mRight,
  mBottom,
}) => {
  const textStyle = {
    fontSize: size || Responsive.normalize(16),
    fontFamily: name || Fonts.Regular,
    color: color || Colors.black,
    lineHeight: size * lineHeightFactor,
    opacity,
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    marginTop: mTop,
    marginLeft: mLeft,
    marginRight: mRight,
    marginBottom: mBottom,
    textAlign,
    textDecorationLine: textDecoration,
    textDecorationColor: textDecoration ? color : null,
    textDecorationStyle: textDecoration ? 'solid' : null,
  };
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={lines}
      onLayout={onLayout}
      onPress={onPress}
      style={[textStyle, style]}>
      {children}
    </Text>
  );
};

FontText.defaultProps = {
  size: Responsive.normalize(14),
  name: Fonts.Regular,
  color: Colors.black,
  lineHeightFactor: 1.5,
  lines: 0,
  opacity: 1,
  textAlign: 'left',
  pTop: 0,
  pLeft: 0,
  pRight: 0,
  pBottom: 0,
  mTop: 0,
  mLeft: 0,
  mRight: 0,
  mBottom: 0,
  textDecoration: null,
};

export default FontText;
