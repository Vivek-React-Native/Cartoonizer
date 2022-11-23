import React, { createRef, useEffect, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import { routeForgotPassword } from './ForgotPassword';
import { routeSignup } from './Signup';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken, Settings } from 'react-native-fbsdk-next';
import { routeHome } from './Home';
import { useTheme } from '@react-navigation/native';

export const routeLogIn = Strings.Login.kLogin;

const Login = props => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const { navigation } = props;
  const PasswordRef = createRef(null);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [SecureText, setSecureText] = useState(true);
  const [SignInPressed, setSignInPressed] = useState(false);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '900908180843-16lttvg2vb6f9v32h97jus57facg4hrc.apps.googleusercontent.com',
    });
    Settings.setAppID('322811259776814');
    Settings.initializeSDK();
  }, []);

  const LogInWithDATA = [
    {
      text: Strings.Login.kGoogle,
      image: Images.img_google,
      function: () => LoginWithGoogle(),
    },
    {
      text: Strings.Login.kYoutube,
      image: Images.img_youtube,
      function: () => LoginWithYoutube(),
    },
    {
      text: Strings.Login.kFacebook,
      image: Images.img_facebook,
      function: () => LoginWithFacebook(),
    },
    {
      text: Strings.Login.kInstagram,
      image: Images.img_instagram,
      function: () => LoginWithInstagram(),
    },
    {
      text: Strings.Login.kTikTok,
      image: Images.img_tiktok,
      function: () => LoginWithTiktok(),
    },
  ];

  const LoginWithGoogle = async () => {
    console.log('Google Login.....');
    setLoading(true);
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const data = await auth().signInWithCredential(googleCredential);

      setLoading(false);
      utils.setUID(data);
      navigation.navigate(routeHome);
    } catch (e) {
      setLoading(false);
      console.log('Error of google sign in...', e);
    }
  };

  const LoginWithYoutube = () => {};

  const LoginWithFacebook = async () => {
    console.log('Facebook Login.....');
    setLoading(true);
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      const value = await auth().signInWithCredential(facebookCredential);
      setLoading(false);
      utils.setUID(value);
      navigation.navigate(routeHome);
    } catch (error) {
      setLoading(false);
      console.log('Facebook Login Error.....', error);
    }
  };

  const LoginWithInstagram = () => {};

  const LoginWithTiktok = () => {};

  const SignInUser = async () => {
    setSignInPressed(true);
    if (
      utils.isEmailValid(Email) &&
      Password.length > 7 &&
      Password.length < 16
    ) {
      setLoading(true);
      firebaseLogin();
    }
  };

  const firebaseLogin = async () => {
    try {
      await auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(data => {
          setLoading(false);
          console.log(
            'signInWithEmailAndPassword and stored in AsyncStorage....',
            data,
          );
          utils.setUID(data);
          navigation.navigate(routeHome);
        })
        .catch(error => {
          setLoading(false);
          if (error.code === 'auth/user-not-found') {
            return alert('User Not Found!');
          }
          if (error.code == 'auth/wrong-password') {
            return alert('Invalid Password!');
          }

          console.log('Firebase Login Error from login page...', error);
        });
    } catch (error) {
      console.log('Login Firebase Error........', error);
    }
  };

  // validation ....
  const EmailError =
    SignInPressed && (Email.length <= 1 || !utils.isEmailValid(Email));
  const PasswordError =
    SignInPressed && (Password.length < 7 || Password.length > 16);

  return (
    <Container Loading={Loading} backgroundColor={Colors.k3E60FF}>
      {/* <Image
        source={Images.img_Background}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      /> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.Box, { backgroundColor: colors.background }]}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : null}>
          <View style={styles.TopMainView}>
            <Header
              Container={{
                backgroundColor: Colors.k3E60FF,
              }}
              title={Strings.Login.kLogin}
              LeftIcon={Images.img_backIcon}
              tintColor={Colors.white}
            />

            <Image
              source={Images.img_login}
              resizeMode={'stretch'}
              style={styles.blueImage}
            />

            <Image
              source={Images.img_loginLady}
              resizeMode={'cover'}
              style={styles.ladyImage}
            />
          </View>

          <View style={styles.WelcomeView}>
            <FontText
              pBottom={3}
              name={Fonts.SemiBold}
              color={colors.text}
              size={Responsive.normalize(20)}>
              {Strings.Login.kWelcomeBack}
            </FontText>

            <View style={styles.WelcomeDevider} />
          </View>

          <View style={{ paddingVertical: Responsive.hp(1) }}>
            <InputWithLogo
              LeftIcon={Images.img_Email}
              placeholder={Strings.Login.kEmailAddress}
              value={Email}
              ContainerStyle={
                EmailError ? { borderWidth: 2, borderColor: '#f00' } : {}
              }
              onChangeText={val => setEmail(val)}
              onEndEditing={() => PasswordRef.current.focus()}
            />
            <InputWithLogo
              ref={PasswordRef}
              LeftIcon={Images.img_Password}
              placeholder={Strings.Login.kPassword}
              value={Password}
              onChangeText={val => setPassword(val)}
              returnKeyType={'go'}
              ContainerStyle={
                PasswordError ? { borderWidth: 2, borderColor: '#f00' } : {}
              }
              secureTextEntry={SecureText}
              secureViewIcon={true}
              setSecureTextEntry={() => setSecureText(!SecureText)}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate(routeForgotPassword)}>
          <FontText
            color={Colors.k979797}
            name={Fonts.Regular}
            size={Responsive.normalize(13)}>
            {Strings.Login.kForgot}
          </FontText>
        </TouchableOpacity>

        <LinearButton
          name={Strings.Login.kSignIn}
          onPress={() => SignInUser()}
        />

        <View style={styles.ORMainView}>
          <View style={styles.devider} />
          <FontText
            color={Colors.k3E60FF}
            name={Fonts.Medium}
            pRight={Responsive.wp(2)}
            pLeft={Responsive.wp(2)}
            size={Responsive.normalize(13)}>
            {'OR'}
          </FontText>
          <View style={styles.devider} />
        </View>

        {LogInWithDATA.map((item, index) => (
          <View key={index}>
            <LoginWith
              text={item.text}
              image={item.image}
              onPress={item.function}
            />
          </View>
        ))}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: Responsive.hp(3),
          }}>
          <FontText
            color={Colors.k979797}
            name={Fonts.Regular}
            size={Responsive.normalize(13)}>
            {`Don't have an account?`}
          </FontText>
          <TouchableOpacity onPress={() => navigation.navigate(routeSignup)}>
            <FontText
              color={Colors.k3E60FF}
              name={Fonts.Medium}
              size={Responsive.normalize(13)}>
              {' Sign Up'}
            </FontText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;

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
});
