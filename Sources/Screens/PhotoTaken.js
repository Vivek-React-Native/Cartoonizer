import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  Container,
  FontText,
  Header,
  SimpleButton,
  HorizontalCard,
} from '../Common';
import { Colors, Fonts, Images, Responsive, Strings } from '../Constants';
import { routePremium } from './Premium';
import { routeSaveAndShare } from './SaveAndShare';

export const routePhotoTaken = 'Photo Taken';

const PhotoTaken = props => {
  const { navigation } = props;
  const DATA = [
    {
      combo: Strings.ChoosePhoto.kStandardCombo,
      include: Strings.ChoosePhoto.kIncludeoriginal,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      img_1: Images.img_cartoon_2,
      img_2: Images.img_cartoon_2,
      img_3: Images.img_cartoon_2,
    },
    {
      combo: Strings.ChoosePhoto.kStandardCombo,
      include: Strings.ChoosePhoto.kIncludeoriginal,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      img_1: Images.img_cartoon_2,
      img_2: Images.img_cartoon_2,
      img_3: Images.img_cartoon_2,
    },
  ];

  const data = [
    Images.img_cartoon_1,
    Images.img_cartoon_1,
    Images.img_cartoon_1,
    Images.img_cartoon_1,
  ];

  return (
    <Container Dark={true} backgroundColor={Colors.kF4FBFF}>
      <View
        style={{
          position: 'absolute',
          bottom: Responsive.hp(1.5),
          zIndex: 10,
        }}>
        <HorizontalCard data={DATA} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: Colors.kF4FBFF,
          paddingTop: Responsive.hp(1),
          zIndex: 1,
        }}>
        <Header
          LeftIcon={Images.img_backIcon}
          LeftIcon_1={Images.img_Gallery}
          LeftIcon_2={Images.img_Camera}
          LeftPress={() => navigation.goBack()}
          RightIcon={Images.img_Download}
          RightIcon_1={Images.img_Share}
          RightPress_1={() => navigation.navigate(routeSaveAndShare)}
          borderNeeded={true}
          borderNeededLeft={true}
          spaceNeed={true}
          rightStyle={{ flex: 1.1 }}
        />

        {/* Single Photo View */}
        {/* <View
          style={{
            width: Responsive.wp(90),
            alignSelf: 'center',
            height: '30%',
            marginTop: Responsive.hp(18),
            padding: Responsive.wp(4),
            backgroundColor: Colors.white,
          }}>
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: '#000',
              borderStyle: 'dashed',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={Images.img_cartoon_1}
              resizeMode="stretch"
              style={{ width: '45%', height: '85%' }}
            />

            <TouchableOpacity
              style={{
                width: '10%',
                height: '18%',
                borderWidth: 1,
                position: 'absolute',
                bottom: Responsive.hp(2),
                left: Responsive.wp(23),
                tintColor: Colors.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: Colors.white,
                borderRadius: 100,
              }}>
              <Image
                source={Images.img_Trash}
                resizeMode="stretch"
                style={{
                  width: '75%',
                  height: '75%',
                }}
              />
            </TouchableOpacity>
          </View>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: Responsive.hp(1),
          }}>
          {data.map((item, index) => (
            <View key={index}>
              <Image
                source={item}
                resizeMode="stretch"
                style={{
                  width: Responsive.wp(45),
                  height: Responsive.hp(18),
                }}
              />
            </View>
          ))}
        </View>

        <FontText
          color={Colors.k26325C}
          name={Fonts.Medium}
          pTop={Responsive.hp(1)}
          size={Responsive.normalize(14)}>
          {Strings.ChoosePhoto.kRateresults}
        </FontText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={Images.img_LoveEmoji}
            resizeMode="contain"
            style={{ width: Responsive.wp(8), height: Responsive.wp(8) }}
          />
          <Image
            source={Images.img_SadEmoji}
            resizeMode="contain"
            style={{ width: Responsive.wp(8), height: Responsive.wp(8) }}
          />
        </View>

        <SimpleButton
          title={Strings.ChoosePhoto.kSignupToGet}
          containerStyle={{ marginTop: Responsive.hp(1.5) }}
        />

        <FontText
          color={Colors.k979797}
          name={Fonts.Regular}
          pTop={Responsive.hp(1)}
          size={Responsive.normalize(14)}>
          {Strings.ChoosePhoto.kNowaterMarkimage}
        </FontText>

        <SimpleButton
          title={Strings.ChoosePhoto.kGoPremium}
          containerStyle={{ marginTop: Responsive.hp(2) }}
          onPress={() => navigation.navigate(routePremium)}
        />
      </View>
    </Container>
  );
};

export default PhotoTaken;

const styles = StyleSheet.create({});
