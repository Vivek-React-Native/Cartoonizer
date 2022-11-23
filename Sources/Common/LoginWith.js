import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { FontText } from '.';
import { Colors, Fonts, Responsive } from '../Constants';

const LoginWith = ({ text, image, onPress }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  return (
    <TouchableOpacity
      style={[
        styles.Box,
        {
          backgroundColor:
            scheme == 'dark' ? colors.background : Colors.kF1F6F7,
        },
      ]}
      onPress={onPress}>
      <Image
        source={image}
        resizeMode="contain"
        style={{
          width: Responsive.wp(7),
          height: Responsive.wp(7),
        }}
      />
      <FontText
        style={{ flex: 1 }}
        color={scheme == 'dark' ? colors.text : Colors.k26325C}
        textAlign={'center'}
        size={Responsive.normalize(14)}
        name={Fonts.Regular}>
        {text}
      </FontText>
    </TouchableOpacity>
  );
};

export default LoginWith;

const styles = StyleSheet.create({
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Responsive.wp(7),
    marginVertical: Responsive.hp(1),
    padding: Responsive.normalize(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.kCCD6DA,
  },
});
