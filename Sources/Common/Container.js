import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../Constants';
import Loader from './Loader';

const Container = props => {
  const { backgroundColor, children, Loading, Dark } = props;

  return (
    <SafeAreaView
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: backgroundColor || Colors.white },
      ]}>
      <StatusBar
        backgroundColor={backgroundColor || Colors.white}
        barStyle={Dark ? 'dark-content' : 'light-content'}
      />
      <View style={{ flex: 1 }}>
        {Loading && <Loader />}
        {children}
      </View>
    </SafeAreaView>
  );
};

Container.defaultProps = {
  backgroundColor: Colors.white,
  Loading: false,
  Dark: false,
};

export default Container;

const styles = StyleSheet.create({});
