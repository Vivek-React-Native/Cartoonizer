import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontText } from '.';
import { Colors, Fonts, Responsive, Strings } from '../Constants';

const LinearButton = ({ name, onPress, ContainerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Box, ContainerStyle]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.LinearView}
        colors={['#3753FA', '#7D66FC']}>
        <FontText
          color={Colors.white}
          name={Fonts.SemiBold}
          textAlign={'center'}
          size={Responsive.normalize(18)}>
          {name}
        </FontText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;

const styles = StyleSheet.create({
  Box: {
    width: Responsive.wp(90),
    alignSelf: 'center',
    height: Responsive.hp(7),
    alignItems: 'center',
    marginVertical: Responsive.hp(3),
    borderRadius: Responsive.wp(10),
    overflow: 'hidden',
  },
  LinearView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
