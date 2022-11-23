import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors, Fonts, Images, Responsive, Strings } from '../Constants';

const InputWithLogo = React.forwardRef((props, ref) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const {
    placeholder,
    InputStyle,
    LeftIcon,
    ContainerStyle,
    onChangeText,
    onSubmitEditing,
    onEndEditing,
    onFocus,
    onBlur,
    returnKeyType,
    keyboardType,
    secureTextEntry,
    setSecureTextEntry,
    value,
    textAlign,
    secureViewIcon,
  } = props;

  return (
    <View
      style={[
        styles.Container,
        {
          backgroundColor: colors.background,
          borderWidth: scheme == 'dark' ? 1 : 0,
          borderColor: colors.text,
        },
        ContainerStyle,
      ]}>
      {LeftIcon && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRightWidth: 1,
            width: '12%',
            marginRight: '3%',
            borderColor: Colors.k979797,
          }}>
          <Image
            source={LeftIcon}
            resizeMode="contain"
            style={{
              width: Responsive.normalize(22),
              height: Responsive.normalize(22),
              tintColor: scheme == 'dark' ? colors.text : Colors.k979797,
            }}
          />
        </View>
      )}

      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={scheme == 'dark' ? colors.text : Colors.k979797}
        style={[styles.Input, InputStyle]}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType || 'default'}
        returnKeyType={returnKeyType || 'next'}
        secureTextEntry={secureTextEntry || false}
        value={value}
        textAlign={textAlign || 'left'}
        textAlignVertical="center"
      />

      {secureViewIcon && (
        <TouchableOpacity activeOpacity={1} onPress={setSecureTextEntry}>
          <Image
            source={
              secureTextEntry ? Images.img_Visible : Images.img_VisibleOff
            }
            resizeMode="contain"
            style={{
              width: Responsive.normalize(22),
              height: Responsive.normalize(22),
              tintColor: scheme == 'dark' ? colors.text : Colors.k979797,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

InputWithLogo.defaultProps = {
  placeholder: '',
  InputStyle: {},
  LeftIcon: null,
  ContainerStyle: {},
  onChangeText: () => {},
  onSubmitEditing: () => {},
  onEndEditing: () => {},
  onFocus: () => {},
  onBlur: () => {},
  returnKeyType: 'next',
  secureTextEntry: false,
  value: '',
  textAlign: 'left',
};

export default InputWithLogo;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Responsive.wp(90),
    height: Responsive.hp(7),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: Responsive.normalize(25),
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: Colors.black + '99',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    paddingHorizontal: Responsive.wp(4),
    marginVertical: Responsive.hp(1),
  },
  Input: {
    flex: 1,
    fontFamily: Fonts.Medium,
    fontSize: Responsive.normalize(16),
    color: Colors.black,
  },
});
