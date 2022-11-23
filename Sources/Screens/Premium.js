import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, FontText, Header, LinearButton } from '../Common';
import { Colors, Fonts, Images, Responsive, Strings } from '../Constants';

export const routePremium = 'Premium';

const Premium = ({ navigation }) => {
  const [SelectedSubscribe, setSelectedSubscribe] = useState(0);

  const floatData = [
    {
      img: Images.img_noWatermark,
      text: Strings.Premium.kNoWatermark,
    },
    {
      img: Images.img_high,
      text: Strings.Premium.kHighresolution,
    },
    {
      img: Images.img_FasterSpeed,
      text: Strings.Premium.kFasterSpeed,
    },
  ];

  const subscribeData = [
    {
      text: '12 Months: $29.99/Year',
      subText: 'Just $2.50/Month',
      discount: '50%',
    },
    {
      text: '1 Month: $4.99/Month',
    },
  ];

  return (
    <Container backgroundColor={Colors.k3753FA}>
      <LinearGradient
        style={{ flex: 1, paddingTop: Responsive.hp(0.5), zIndex: -1 }}
        colors={[Colors.k3753FA, Colors.k7D66FC]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Header
          LeftIcon={Images.img_Cross}
          LeftPress={() => navigation.goBack()}
          tintColor={Colors.white}
          Restore={() => console.log('Restore Pressed....')}
        />

        <Image
          source={Images.img_PremiumCartoon}
          resizeMode="contain"
          style={{
            width: Responsive.wp(40),
            height: Responsive.hp(25),
            alignSelf: 'center',
            marginTop: Responsive.hp(1),
          }}
        />
      </LinearGradient>

      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View
          style={{
            backgroundColor: Colors.white,
            width: Responsive.wp(85),
            height: Responsive.hp(20),
            alignSelf: 'center',
            position: 'absolute',
            top: -Responsive.hp(12),
            borderRadius: 10,
            padding: Responsive.wp(2),
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowColor: Colors.black,
            shadowOpacity: 0.15,
            shadowRadius: 16,
            elevation: 7,
          }}>
          {floatData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: Responsive.hp(1),
                marginTop: Responsive.hp(0.5),
                height: '30%',
              }}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  width: Responsive.wp(7),
                  height: Responsive.wp(7),
                }}
              />

              <FontText
                color={Colors.k060A2F}
                name={Fonts.Regular}
                pLeft={Responsive.hp(2)}
                size={Responsive.normalize(14)}>
                {item.text}
              </FontText>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            flex: 1,
            marginTop: Responsive.hp(10),
          }}>
          {subscribeData.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedSubscribe(index)}
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: Responsive.wp(90),
                height: Responsive.hp(9),
                alignSelf: 'center',
                marginTop: 10,
                paddingHorizontal: Responsive.wp(3),
                borderRadius: 10,
                backgroundColor:
                  SelectedSubscribe == index ? Colors.kEBE8FF : Colors.white,
              }}>
              <Image
                source={
                  SelectedSubscribe == index
                    ? Images.img_Ticked
                    : Images.img_unTicked
                }
                resizeMode="contain"
                style={{
                  width: Responsive.wp(8),
                  height: Responsive.wp(8),
                }}
              />
              <View
                style={{
                  flex: 1,
                  paddingLeft: Responsive.wp(5),
                }}>
                <FontText
                  color={Colors.k060A2F}
                  name={Fonts.Medium}
                  size={Responsive.normalize(14)}>
                  {item.text}
                </FontText>
                {item.subText && (
                  <FontText
                    color={Colors.k3E60FF}
                    name={Fonts.Regular}
                    size={Responsive.normalize(14)}>
                    {item.subText}
                  </FontText>
                )}
              </View>
              <View>
                <FontText
                  color={Colors.k3E60FF}
                  name={Fonts.Bold}
                  size={Responsive.normalize(14)}>
                  {item.discount}
                </FontText>
                {item.discount && (
                  <FontText
                    color={Colors.k3E60FF}
                    name={Fonts.Bold}
                    size={Responsive.normalize(14)}>
                    {'OFF'}
                  </FontText>
                )}
              </View>
            </TouchableOpacity>
          ))}

          <LinearButton
            name={Strings.Premium.kContinue}
            onPress={() => console.log('Continue Pressed.....')}
          />
        </View>
      </View>
    </Container>
  );
};

export default Premium;

const styles = StyleSheet.create({});
