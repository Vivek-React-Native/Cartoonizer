import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Container,
  FontText,
  Header,
  LinearButton,
  InputWithLogo,
} from '../Common';
import { Colors, Fonts, Images, Responsive, Strings } from '../Constants';

export const routeEdit = 'Edit';

const Edit = ({ navigation }) => {
  const [FullName, setFullName] = useState('');

  return (
    <Container Dark={true}>
      <Header
        LeftIcon={Images.img_backIcon}
        LeftPress={() => navigation.goBack()}
        title={Strings.Settings.kEditProfile}
        titleStyle={{ color: Colors.black, fontWeight: 'bold' }}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: Responsive.wp(90),
              alignSelf: 'center',
              height: Responsive.hp(50),
              borderRadius: 10,
              backgroundColor: Colors.white,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 8 },
              shadowColor: Colors.black,
              shadowOpacity: 0.2,
              shadowRadius: 16,
              elevation: 8,
            }}>
            <ImageBackground
              source={Images.img_EditBackground}
              resizeMode="stretch"
              style={{
                width: '100%',
                height: Responsive.hp(17),
              }}>
              <View
                style={{
                  width: Responsive.wp(25),
                  height: Responsive.wp(25),
                  position: 'absolute',
                  bottom: -Responsive.hp(5),
                  alignSelf: 'center',
                  backgroundColor: Colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowColor: Colors.black,
                  shadowOpacity: 0.2,
                  shadowRadius: 16,
                  elevation: 8,
                }}>
                <Image
                  source={Images.img_cartoon_1}
                  resizeMode="cover"
                  style={{
                    width: '85%',
                    height: '85%',
                    borderRadius: 100,
                  }}
                />

                <TouchableOpacity
                  style={{
                    width: Responsive.wp(10),
                    height: Responsive.wp(10),
                    borderRadius: 100,
                    backgroundColor: Colors.white,
                    position: 'absolute',
                    bottom: -Responsive.wp(1),
                    right: -Responsive.wp(1),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Images.img_Camera}
                    resizeMode="contain"
                    style={{
                      width: '80%',
                      height: '80%',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>

            <View
              style={{
                flex: 1,
                marginTop: Responsive.hp(7),
              }}>
              <FontText
                size={Responsive.normalize(16)}
                name={Fonts.Regular}
                textAlign={'center'}
                color={Colors.k7171A3}>
                johan12@gmail.com
              </FontText>

              <InputWithLogo
                placeholder={'Full Name'}
                ContainerStyle={{
                  width: '95%',
                  marginTop: Responsive.hp(2),
                }}
                value={FullName}
                onChangeText={val => setFullName(val)}
              />
            </View>

            <LinearButton
              name={Strings.Settings.kUpdateProfile}
              ContainerStyle={{ width: '95%' }}
              onPress={() => console.log('Profile updated....')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Edit;

const styles = StyleSheet.create({});
