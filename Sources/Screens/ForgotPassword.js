import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
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

export const routeForgotPassword = 'Forgot Password';

const ForgotPassword = ({ navigation }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const [Email, setEmail] = useState('');

  return (
    <Container
      backgroundColor={colors.background}
      Dark={scheme == 'dark' ? false : true}>
      <View
        style={{
          flex: 1,
          paddingTop: Responsive.hp(1.5),
          backgroundColor: colors.background,
        }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              keyboardVerticalOffset={
                Platform.OS === 'ios' ? Responsive.hp(5) : null
              }
              behavior={Platform.OS === 'ios' ? 'position' : null}>
              <Header
                LeftIcon={Images.img_backIcon}
                LeftPress={() => navigation.goBack()}
                tintColor={colors.text}
              />

              <FontText
                color={scheme == 'dark' ? colors.text : Colors.k26325C}
                pTop={Responsive.hp(3)}
                name={Fonts.Medium}
                textAlign={'center'}
                size={Responsive.normalize(18)}>
                {`Forgot Your Password?`}
              </FontText>
              <FontText
                color={Colors.k979797}
                pLeft={Responsive.wp(8)}
                pRight={Responsive.wp(8)}
                pTop={Responsive.hp(0.5)}
                textAlign={'center'}
                name={Fonts.Regular}
                size={Responsive.normalize(12)}>
                {`Enter your registered email below to receive password reset instruction`}
              </FontText>

              <Image
                source={Images.img_forgotImage}
                resizeMode="cover"
                style={{
                  width: Responsive.wp(45),
                  height: Responsive.hp(25),
                  alignSelf: 'center',
                  marginVertical: Responsive.hp(4),
                }}
              />
              <InputWithLogo
                placeholder={Strings.Login.kEmailAddress}
                onChangeText={val => setEmail(val)}
                value={Email}
              />
            </KeyboardAvoidingView>
            <LinearButton
              name={Strings.Login.kSend}
              onPress={() => console.log('pressed')}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  Box: {},
});
