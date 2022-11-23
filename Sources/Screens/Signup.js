import React, { createRef, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Container,
  FontText,
  Header,
  LinearButton,
  InputWithLogo,
  LoginWith,
} from '../Common';
import {
  Colors,
  Fonts,
  Images,
  Responsive,
  Strings,
  utils,
} from '../Constants';
import { routeLogIn } from './Login';
import auth from '@react-native-firebase/auth';
import { routeHome } from './Home';
import { useTheme } from '@react-navigation/native';

export const routeSignup = 'Sign Up';

const Signup = props => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const { navigation } = props;

  // useStates....
  const [DATA, setDATA] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });
  const [SecurePassword, setSecurePassword] = useState(true);
  const [SecureConfirm, setSecureConfirm] = useState(true);
  const [SignUpPressed, setSignUpPressed] = useState(false);
  const [Loading, setLoading] = useState(false);

  // Refs....
  const FullNameRef = createRef(null);
  const PasswordRef = createRef(null);
  const ConfirmPasswordRef = createRef(null);

  const LogInWithDATA = [
    {
      text: Strings.Login.kGoogle,
      image: Images.img_google,
    },
    {
      text: Strings.Login.kYoutube,
      image: Images.img_youtube,
    },
    {
      text: Strings.Login.kFacebook,
      image: Images.img_facebook,
    },
    {
      text: Strings.Login.kInstagram,
      image: Images.img_instagram,
    },
    {
      text: Strings.Login.kTikTok,
      image: Images.img_tiktok,
    },
  ];

  const SignUpUser = async () => {
    setSignUpPressed(true);

    if (
      utils.isEmailValid(DATA.email) &&
      DATA.fullName.length > 0 &&
      DATA.password.length > 7 &&
      DATA.password.length < 16 &&
      DATA.password === DATA.confirmPassword
    ) {
      setLoading(true);
      firebaseLogin();
    }
  };

  const firebaseLogin = async () => {
    try {
      await auth()
        .createUserWithEmailAndPassword(DATA.email, DATA.password)
        .then(data => {
          console.log('User account created & signed in!', data);
          setLoading(false);
          utils.setUID(data);
          Alert.alert('Successfull', 'User account created & signed in!', [
            {
              text: 'Ok',
              onPress: () => navigation.navigate(routeHome),
            },
          ]);
        })
        .catch(error => {
          setLoading(false);
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }

          console.error(error);
        });
    } catch (error) {
      console.log('SignUpUser error......', error);
    }
  };

  // Validation....
  const EmailError =
    SignUpPressed &&
    (DATA.email.length <= 1 || !utils.isEmailValid(DATA.email));
  const FullNameError = SignUpPressed && DATA.fullName.length <= 1;
  const PasswordError =
    SignUpPressed && (DATA.password.length < 7 || DATA.password.length > 16);
  const ConfirmPasswordError =
    SignUpPressed &&
    (DATA.confirmPassword.length <= 1 ||
      DATA.confirmPassword !== DATA.password);

  return (
    <Container Loading={Loading} backgroundColor={Colors.k3E60FF}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.Box, { backgroundColor: colors.background }]}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : null}>
          <View style={styles.TopMainView}>
            <Header
              Container={{ backgroundColor: Colors.k3E60FF }}
              title={routeSignup}
              LeftIcon={Images.img_backIcon}
              tintColor={Colors.white}
              LeftPress={() => navigation.goBack()}
            />

            <Image
              source={Images.img_login}
              resizeMode={'stretch'}
              style={styles.blueImage}
            />

            <Image
              source={Images.img_SignUpLady}
              resizeMode={'cover'}
              style={styles.ladyImage}
            />
          </View>

          <View style={styles.WelcomeView}>
            <FontText
              pBottom={3}
              color={colors.text}
              name={Fonts.SemiBold}
              size={Responsive.normalize(20)}>
              {Strings.Login.kWelcomeBack}
            </FontText>

            <View style={styles.WelcomeDevider} />
          </View>

          <View style={{ paddingVertical: Responsive.hp(1) }}>
            <InputWithLogo
              value={DATA.email}
              LeftIcon={Images.img_Email}
              placeholder={Strings.Login.kEmailAddress}
              ContainerStyle={
                EmailError ? { borderWidth: 2, borderColor: '#f00' } : {}
              }
              onSubmitEditing={() => FullNameRef.current.focus()}
              onChangeText={val => setDATA({ ...DATA, email: val })}
            />
            <InputWithLogo
              ref={FullNameRef}
              value={DATA.fullName}
              LeftIcon={Images.img_user}
              placeholder={Strings.SignUp.kFullName}
              ContainerStyle={
                FullNameError ? { borderWidth: 2, borderColor: '#f00' } : {}
              }
              onSubmitEditing={() => PasswordRef.current.focus()}
              onChangeText={val => setDATA({ ...DATA, fullName: val })}
            />
            <InputWithLogo
              ref={PasswordRef}
              value={DATA.password}
              LeftIcon={Images.img_Password}
              placeholder={Strings.Login.kPassword}
              ContainerStyle={
                PasswordError ? { borderWidth: 2, borderColor: '#f00' } : {}
              }
              onSubmitEditing={() => ConfirmPasswordRef.current.focus()}
              onChangeText={val => setDATA({ ...DATA, password: val })}
              secureViewIcon={true}
              secureTextEntry={SecurePassword}
              setSecureTextEntry={() => setSecurePassword(!SecurePassword)}
            />
            <InputWithLogo
              ref={ConfirmPasswordRef}
              value={DATA.confirmPassword}
              LeftIcon={Images.img_Password}
              placeholder={Strings.SignUp.kConfirmPassword}
              ContainerStyle={
                ConfirmPasswordError
                  ? { borderWidth: 2, borderColor: '#f00' }
                  : {}
              }
              returnKeyType={'go'}
              onChangeText={val => setDATA({ ...DATA, confirmPassword: val })}
              secureViewIcon={true}
              secureTextEntry={SecureConfirm}
              setSecureTextEntry={() => setSecureConfirm(!SecureConfirm)}
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.rowFlex}>
          <FontText
            pLeft={Responsive.wp(7)}
            name={Fonts.Regular}
            color={Colors.k979797}
            size={Responsive.normalize(12)}>
            {Strings.SignUp.kRegister}
          </FontText>
          <TouchableOpacity>
            <FontText
              name={Fonts.Regular}
              color={Colors.k3E60FF}
              size={Responsive.normalize(12)}>
              {Strings.SignUp.kTerms}
            </FontText>
          </TouchableOpacity>
          <FontText
            name={Fonts.Regular}
            color={Colors.k979797}
            size={Responsive.normalize(12)}>
            {Strings.SignUp.kAnd}
          </FontText>
        </View>

        <View style={styles.rowFlex}>
          <TouchableOpacity>
            <FontText
              pLeft={Responsive.wp(7)}
              name={Fonts.Regular}
              color={Colors.k3E60FF}
              size={Responsive.normalize(12)}>
              {Strings.SignUp.kPrivacy}
            </FontText>
          </TouchableOpacity>
          <FontText
            name={Fonts.Regular}
            color={Colors.k979797}
            size={Responsive.normalize(12)}>
            {Strings.SignUp.kBitcomer}
          </FontText>
        </View>

        <LinearButton
          name={Strings.SignUp.kSignUp}
          onPress={() => SignUpUser()}
        />

        <View style={styles.ORMainView}>
          <View style={styles.devider} />
          <FontText
            color={Colors.k979797}
            name={Fonts.Regular}
            pRight={Responsive.wp(2)}
            pLeft={Responsive.wp(2)}
            size={Responsive.normalize(13)}>
            {'OR'}
          </FontText>
          <View style={styles.devider} />
        </View>

        {LogInWithDATA.map((item, index) => (
          <View key={index}>
            <LoginWith text={item.text} image={item.image} />
          </View>
        ))}

        <View style={styles.SignInMainView}>
          <FontText
            color={Colors.k979797}
            name={Fonts.Regular}
            size={Responsive.normalize(13)}>
            {Strings.SignUp.kAlready}
          </FontText>
          <TouchableOpacity onPress={() => navigation.navigate(routeLogIn)}>
            <FontText
              color={Colors.k3E60FF}
              name={Fonts.Medium}
              size={Responsive.normalize(13)}>
              {Strings.Login.kSignIn}
            </FontText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  TopMainView: {
    height: Responsive.hp(30),
  },
  blueImage: {
    width: '100%',
    height: '100%',
  },
  ladyImage: {
    position: 'absolute',
    width: Responsive.wp(60),
    height: Responsive.hp(35),
    bottom: -Responsive.hp(15),
    left: Responsive.wp(25),
  },
  WelcomeView: {
    paddingTop: Responsive.hp(13),
    paddingBottom: Responsive.hp(2),
    alignItems: 'center',
  },
  WelcomeDevider: {
    width: Responsive.wp(20),
    height: 1.5,
    backgroundColor: Colors.k3E60FF,
  },
  forgotPassword: {
    width: Responsive.wp(33),
    alignSelf: 'flex-end',
    marginRight: Responsive.wp(5),
  },
  ORMainView: {
    flexDirection: 'row',
    paddingHorizontal: Responsive.wp(7),
    alignItems: 'center',
    marginBottom: Responsive.hp(2),
  },
  devider: { flex: 1, backgroundColor: Colors.kCCCCCC, height: 1 },
  rowFlex: { flexDirection: 'row', alignItems: 'center' },
  SignInMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: Responsive.hp(3),
  },
});
