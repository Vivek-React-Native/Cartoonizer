import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, FontText, Header } from '../Common';
import {
  Colors,
  Fonts,
  Images,
  Responsive,
  Strings,
  utils,
} from '../Constants';
import { routeChangePassword } from './ChangePassword';
import { routeEdit } from './Edit';
import Auth from '@react-native-firebase/auth';
import { routeLogIn } from './Login';

export const routeSetting = 'Setting';

const Setting = ({ navigation }) => {
  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');

  const Buttons = [
    {
      img: Images.img_EditPassword,
      text: Strings.Settings.kEdit,
      navigation: routeEdit,
    },
    {
      img: Images.img_ChangePassword,
      text: Strings.Settings.kChangePassword,
      navigation: routeChangePassword,
    },
    {
      img: Images.img_RateUs,
      text: Strings.Settings.kRateus,
      navigation: '',
    },
    {
      img: Images.img_ShareApp,
      text: Strings.Settings.kShareApp,
      navigation: '',
    },
    {
      img: Images.img_Help,
      text: Strings.Settings.kHelp,
      navigation: '',
    },
    {
      img: Images.img_TermsAndCond,
      text: Strings.Settings.kTerms,
      navigation: '',
    },
    {
      img: Images.img_Privacy,
      text: Strings.Settings.kPrivacy,
      navigation: '',
    },
    {
      img: Images.img_Logout,
      text: Strings.Settings.kLogout,
      navigation: FirebaseLogout,
    },
  ];

  const icons = [
    Images.img_FullFacebook,
    Images.img_FullInstagram,
    Images.img_FullWhatsapp,
    Images.img_FullEmail,
    Images.img_FullMoreIcon,
  ];

  useEffect(() => {
    getAsyncValue();
  }, []);

  const getAsyncValue = async () => {
    const data = await utils.getUID();
    const indexofAtTheRate = data?.user?.email.indexOf('@');
    const Name =
      data.user.displayName || data?.user?.email.substr(0, indexofAtTheRate);

    setUserName(Name);
    setUserEmail(data.user.email);
  };

  const FirebaseLogout = async () => {
    try {
      await Auth()
        .signOut()
        .then(async () => {
          await utils.clearAsyncStorage();
          navigation.navigate(routeLogIn);
        });
    } catch (error) {
      console.log('Firebase Logout Error....', error);
    }
  };

  return (
    <Container Dark={true} backgroundColor={Colors.kF4FBFF}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.kF4FBFF,
        }}>
        <Header
          LeftIcon={Images.img_backIcon}
          LeftPress={() => navigation.goBack()}
          title={Strings.Settings.kSetting}
          titleStyle={{ color: Colors.black, fontWeight: 'bold' }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingHorizontal: Responsive.wp(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <ImageBackground
              source={Images.img_SettingFrame}
              resizeMode="cover"
              style={{
                width: Responsive.wp(20),
                height: Responsive.wp(20),
                alignItems: 'center',
                justifyContent: 'flex-end',
                borderRadius: 100,
                paddingBottom: Responsive.hp(0.8),
                paddingRight: Responsive.hp(0.8),
              }}>
              <Image
                source={Images.img_google}
                resizeMode="cover"
                style={{
                  width: '75%',
                  height: '80%',
                  borderRadius: 100,
                }}
              />
            </ImageBackground>
            <View
              style={{
                flex: 1,
                marginLeft: Responsive.wp(2),
                justifyContent: 'space-around',
              }}>
              <FontText
                pBottom={Responsive.hp(0.5)}
                name={Fonts.Medium}
                size={Responsive.normalize(16)}
                color={Colors.k060A2F}>
                {UserName}
              </FontText>
              <FontText
                name={Fonts.Regular}
                size={Responsive.normalize(16)}
                color={Colors.k7171A3}>
                {UserEmail}
              </FontText>
            </View>
          </View>

          {/* ....Buttons.... */}
          <View
            style={{
              flex: 1,
              marginBottom: Responsive.hp(3),
              marginTop: Responsive.hp(1),
            }}>
            {Buttons.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  if (Buttons.length - 1 == index) {
                    return FirebaseLogout();
                  }
                  navigation.navigate(item.navigation);
                }}
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: Responsive.hp(1),
                  paddingVertical: Responsive.hp(1),
                  paddingLeft: Responsive.hp(1),
                }}>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={{
                    width: Responsive.wp(10),
                    height: Responsive.wp(10),
                  }}
                />

                <FontText
                  pLeft={Responsive.wp(4)}
                  size={Responsive.normalize(16)}
                  name={Fonts.Regular}
                  color={Colors.k060A2F}>
                  {item.text}
                </FontText>
              </TouchableOpacity>
            ))}

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
        </ScrollView>
      </View>
    </Container>
  );
};

export default Setting;

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
