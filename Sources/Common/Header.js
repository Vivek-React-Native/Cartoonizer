import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { FontText } from '.';
import { Colors, Fonts, Responsive } from '../Constants';

const { width, height } = Dimensions.get('screen');

const Header = props => {
  const { colors } = useTheme();

  const {
    title,
    LeftIcon,
    LeftPress,
    Container,
    RightPress,
    RightIcon,
    titleColor,
    borderNeeded,
    RightPress_1,
    RightIcon_1,
    RightPress_2,
    RightIcon_2,
    borderNeededLeft,
    LeftIcon_1,
    LeftPress_1,
    LeftIcon_2,
    LeftPress_2,
    spaceNeed,
    rightStyle,
    Restore,
    titleStyle,
  } = props;

  return (
    <SafeAreaView style={[styles.Container, Container]}>
      <View style={styles.Box}>
        <View
          style={[
            styles.View1,
            {
              flex: LeftIcon_1 && LeftIcon_2 ? 1.7 : 1,
              justifyContent:
                LeftIcon_1 || LeftIcon_2 ? 'space-between' : 'flex-start',
            },
          ]}>
          {LeftIcon && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={LeftPress}
              style={[
                styles.ImageView,
                {
                  borderWidth: 1,
                  borderColor: Colors.k90ABC5,
                },
              ]}>
              <Image
                source={LeftIcon}
                resizeMode="stretch"
                style={[
                  {
                    width: '75%',
                    height: '75%',
                  },
                  { tintColor: colors.text },
                ]}
              />
            </TouchableOpacity>
          )}
          {LeftIcon_1 && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={LeftPress_1}
              style={[
                styles.ImageView,
                borderNeededLeft && {
                  borderWidth: 1,
                  borderColor: Colors.k90ABC5,
                },
              ]}>
              <Image
                source={LeftIcon_1}
                resizeMode="contain"
                style={[styles.image, { tintColor: colors.text }]}
              />
            </TouchableOpacity>
          )}
          {LeftIcon_2 && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={LeftPress_2}
              style={[
                styles.ImageView,
                borderNeededLeft && {
                  borderWidth: 1,
                  borderColor: Colors.k90ABC5,
                },
              ]}>
              <Image
                source={LeftIcon_2}
                resizeMode="contain"
                style={[styles.image, { tintColor: colors.text }]}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.View2}>
          <Text
            style={[
              styles.title,
              { color: titleColor || Colors.white },
              titleStyle,
            ]}>
            {title}
          </Text>
        </View>

        <View
          style={[
            styles.View3,

            {
              flex: spaceNeed ? 1.1 : 1,
              flex: RightIcon_1 && RightIcon_2 ? 1.7 : 1,
              justifyContent:
                RightIcon_1 || RightIcon_2 ? 'space-between' : 'flex-end',
            },
            rightStyle,
          ]}>
          {RightIcon && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={RightPress}
              style={[
                styles.ImageView,
                borderNeeded && { borderWidth: 1, borderColor: Colors.k90ABC5 },
              ]}>
              <Image
                source={RightIcon}
                resizeMode="contain"
                style={[styles.image, { tintColor: colors.text }]}
              />
            </TouchableOpacity>
          )}
          {RightIcon_1 && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={RightPress_1}
              style={[
                styles.ImageView,
                borderNeeded && { borderWidth: 1, borderColor: Colors.k90ABC5 },
              ]}>
              <Image
                source={RightIcon_1}
                resizeMode="contain"
                style={[styles.image, { tintColor: colors.text }]}
              />
            </TouchableOpacity>
          )}

          {RightIcon_2 && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={RightPress_2}
              style={[
                styles.ImageView,
                borderNeeded && { borderWidth: 1, borderColor: Colors.k90ABC5 },
              ]}>
              <Image
                source={RightIcon_2}
                resizeMode="contain"
                style={[styles.image, { tintColor: colors.text }]}
              />
            </TouchableOpacity>
          )}

          {Restore && (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={Restore}
              style={[styles.restore]}>
              <FontText size={Responsive.normalize(14)} name={Fonts.SemiBold}>
                {'RESTORE'}
              </FontText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

Header.defaultProps = {
  title: '',
  barStyle: null,
  LeftPress: () => null,
  FontFamily: Fonts.Regular,
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.transparent,
    paddingHorizontal: width * 0.02,
    paddingVertical: Responsive.hp(1),
    alignItems: 'center',
  },
  Box: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginHorizontal: width * 0.02,
    alignItems: 'center',
  },
  View1: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  View2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View3: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ImageView: {
    width: Responsive.wp(9),
    height: Responsive.wp(9),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  image: {
    width: Responsive.wp(10),
    height: Responsive.wp(6),
  },
  title: {
    fontSize: Responsive.normalize(20),
    fontWeight: '600',
    // fontFamily: Fonts.Bold,
  },
  restore: {
    backgroundColor: Colors.white + '99',
    paddingVertical: Responsive.hp(0.5),
    paddingHorizontal: Responsive.wp(3),
    borderRadius: 5,
  },
});
