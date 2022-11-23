import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Login, { routeLogIn } from '../Screens/Login';
import Signup, { routeSignup } from '../Screens/Signup';
import ForgotPassword, { routeForgotPassword } from '../Screens/ForgotPassword';
import Home, { routeHome } from '../Screens/Home';
import ChoosePhoto, { routeChoosePhoto } from '../Screens/ChoosePhoto';
import SaveAndShare, { routeSaveAndShare } from '../Screens/SaveAndShare';
import Premium, { routePremium } from '../Screens/Premium';
import Setting, { routeSetting } from '../Screens/Setting';
import Edit, { routeEdit } from '../Screens/Edit';
import ChangePassword, { routeChangePassword } from '../Screens/ChangePassword';
import { Loader } from '../Common';
import { useColorScheme, View } from 'react-native';

const Stack = createNativeStackNavigator();

export const routeAuthStack = 'AuthStack';
export const routeUserStack = 'UserStack';

const Routes = () => {
  const scheme = useColorScheme();
  console.log('Scheme....', scheme);

  const [initializing, setInitializing] = useState(true);
  const [User, setUser] = useState();

  function onAuthStateChanged(User) {
    setUser(User);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return (
      <View style={{ flex: 1 }}>
        <Loader />
      </View>
    );

  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#101010',
      text: '#ffffff',
    },
  };

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
      text: '#101010',
    },
  };

  return (
    <NavigationContainer theme={scheme == 'dark' ? darkTheme : lightTheme}>
      {!User ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={routeLogIn} component={Login} />
          <Stack.Screen name={routeSignup} component={Signup} />
          <Stack.Screen name={routeForgotPassword} component={ForgotPassword} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={routeHome} component={Home} />
          <Stack.Screen name={routeChoosePhoto} component={ChoosePhoto} />
          <Stack.Screen name={routePremium} component={Premium} />
          <Stack.Screen name={routeSaveAndShare} component={SaveAndShare} />
          <Stack.Screen name={routeSetting} component={Setting} />
          <Stack.Screen name={routeEdit} component={Edit} />
          <Stack.Screen name={routeChangePassword} component={ChangePassword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
