import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Container, Header, LinearButton, InputWithLogo } from '../Common';
import { Colors, Images, Responsive, Strings } from '../Constants';

export const routeChangePassword = 'Change Password';

const ChangePassword = ({ navigation }) => {
  const [DATA, setDATA] = useState({
    currentPassword: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <Container backgroundColor={Colors.kF4FBFF} Dark={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.kF4FBFF,
          }}>
          <Header
            LeftIcon={Images.img_backIcon}
            LeftPress={() => navigation.goBack()}
            title={Strings.Settings.kChangePassword}
            titleStyle={{ color: Colors.black, fontWeight: 'bold' }}
          />

          <View style={{ flex: 1, paddingTop: Responsive.hp(3) }}>
            <InputWithLogo
              placeholder={'Current Password'}
              onChangeText={val => setDATA({ ...DATA, currentPassword: val })}
              value={DATA.currentPassword}
            />
            <InputWithLogo
              placeholder={'Password'}
              onChangeText={val => setDATA({ ...DATA, password: val })}
              value={DATA.password}
            />
            <InputWithLogo
              placeholder={'Confirm Password'}
              onChangeText={val => setDATA({ ...DATA, confirmPassword: val })}
              value={DATA.confirmPassword}
            />

            <LinearButton name={Strings.Settings.kUpdateProfile} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
