import AsyncStorage from '@react-native-async-storage/async-storage';

export const isEmailValid = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export const setUID = async object => {
  const obj = {
    additionalUserInfo: {
      isNewUser: false,
      profile: null,
      providerId: 'password',
      username: null,
    },
    user: {
      displayName: null,
      email: 'ghodadra@gmail.com',
      emailVerified: false,
      isAnonymous: false,
      metadata: [Object],
      phoneNumber: null,
      photoURL: null,
      providerData: [Array],
      providerId: 'firebase',
      refreshToken:
        'AIwUaOmIjya6sXELzLmJMKCOjAPHrVlbVu2759wIc596qJ8Io0msMfJXO2ten15ipoDYd--zNyUm969j6EEomZewQpGwlC22LSYID_SlLaO91_Z3wZWDsbcgtztmtNTigs87YiR0kY_1TPuuDZdBXqm7wkFRA3vjjG1ebmyvxRBCaddDm2zPnwpJwUAqmaSuBgXBqOjQzZVUr1dpR4Yl31Ov6qGzdKa7aA',
      tenantId: null,
      uid: 'gLaCyIsqTKSAqyhDY4JPjguBcxv1',
    },
  };
  await AsyncStorage.setItem('UID', JSON.stringify(object));
};

export const getUID = async () => {
  const item = await AsyncStorage.getItem('UID');
  return JSON.parse(item);
};

export const clearAsyncStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    // console.log('All Keys....', keys);
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error('Error clearing app data.');
  }
};
