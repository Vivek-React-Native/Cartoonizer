import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, Responsive } from '../Constants';
import { FontText } from '.';

const SimpleButton = ({ title, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: Responsive.wp(90),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: Responsive.hp(1),
          borderWidth: 1,
          borderColor: Colors.k3E60FF,
          borderRadius: 100,
        },
        containerStyle,
      ]}>
      <FontText
        color={Colors.k3E60FF}
        name={Fonts.SemiBold}
        size={Responsive.normalize(16)}>
        {title}
      </FontText>
    </TouchableOpacity>
  );
};

export default SimpleButton;
