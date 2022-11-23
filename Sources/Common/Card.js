import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontText } from '.';
import { Colors, Fonts, Responsive } from '../Constants';

const Card = props => {
  const { index, MainImage, subImages, Text, onPress } = props;

  return (
    <View
      key={index}
      style={{
        width: Responsive.wp(90),
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginVertical: Responsive.hp(1.5),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 16,
        paddingTop: Responsive.hp(1.5),
        paddingHorizontal: Responsive.hp(1.5),
        elevation: 8,
      }}>
      {/* Top Images View */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={MainImage}
          resizeMode="cover"
          style={{
            width: '45%',
            height: Responsive.wp(42),
            borderRadius: 8,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {subImages.map((sub, subIdx) => (
            <View key={subIdx}>
              <Image
                source={sub}
                resizeMode="contain"
                style={{
                  width: Responsive.wp(20),
                  height: Responsive.wp(20),
                  margin: Responsive.wp(1),
                  borderRadius: 10,
                }}
              />
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: Responsive.wp(2),
        }}>
        <FontText name={Fonts.Medium} size={Responsive.normalize(18)}>
          {Text}
        </FontText>

        <TouchableOpacity
          onPress={() => onPress(props)}
          style={{
            width: Responsive.wp(12),
            height: Responsive.wp(12),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            marginVertical: Responsive.hp(2),
          }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: Responsive.wp(12),
              height: Responsive.wp(12),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}
            colors={['#3753FA', '#7D66FC']}>
            <FontText
              name={Fonts.SemiBold}
              color={Colors.white}
              size={Responsive.normalize(25)}>
              {'>'}
            </FontText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
