import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, FontText } from '../Common';
import { Colors, Images, Responsive, Fonts } from '../Constants';
import { routeSetting } from './Setting';

export const routeSaveAndShare = 'Save & Share';

const SaveAndShare = props => {
  const { navigation } = props;

  const data = [
    Images.img_cartoon_1,
    Images.img_cartoon_1,
    Images.img_cartoon_1,
    Images.img_cartoon_1,
  ];

  const icons = [
    Images.img_FullFacebook,
    Images.img_FullInstagram,
    Images.img_FullWhatsapp,
    Images.img_FullEmail,
    Images.img_FullMoreIcon,
  ];

  return (
    <Container Dark={true} backgroundColor={Colors.kF4FBFF}>
      <View
        style={{
          flex: 1,
          paddingTop: Responsive.hp(1),
          backgroundColor: Colors.kF4FBFF,
        }}>
        <Header
          title={'Save & Share'}
          borderNeeded={true}
          titleColor={Colors.black}
          RightIcon={Images.img_user}
          LeftIcon={Images.img_backIcon}
          LeftPress={() => navigation.goBack()}
          RightPress={() => navigation.navigate(routeSetting)}
        />

        <View style={{ flex: 1 }}>
          <View
            style={{
              height: Responsive.hp(40),
              marginTop: Responsive.hp(2),
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: Responsive.wp(1),
              marginHorizontal: Responsive.wp(6),
              borderWidth: 1,
            }}>
            {data.map((item, index) => (
              <View key={index}>
                <Image
                  source={item}
                  resizeMode="cover"
                  style={{
                    width: Responsive.wp(42),
                    height: Responsive.hp(19.2),
                  }}
                />
              </View>
            ))}
          </View>

          <View style={styles.ORMainView}>
            <View style={styles.devider} />
            <FontText
              color={Colors.black}
              name={Fonts.Medium}
              pRight={Responsive.wp(2)}
              pLeft={Responsive.wp(2)}
              size={Responsive.normalize(13)}>
              {'Share to'}
            </FontText>
            <View style={styles.devider} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: Responsive.wp(90),
              marginTop: Responsive.hp(1),
              alignSelf: 'center',
            }}>
            {icons.map((item, index) => (
              <View key={index}>
                <Image
                  source={item}
                  resizeMode="contain"
                  style={{
                    width: Responsive.wp(12),
                    height: Responsive.wp(12),
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SaveAndShare;

const styles = StyleSheet.create({
  ORMainView: {
    flexDirection: 'row',
    paddingHorizontal: Responsive.wp(7),
    alignItems: 'center',
    marginBottom: Responsive.hp(2),
    marginTop: Responsive.hp(3),
  },
  devider: { flex: 1, backgroundColor: Colors.kCCCCCC, height: 1 },
});
