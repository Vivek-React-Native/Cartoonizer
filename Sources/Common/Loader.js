import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

const Loader = props => {
  const { animating, color, hide, size, style, visible } = props;

  return (
    <Modal visible={visible} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000' + '80',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator
          animating={animating || true}
          color={color || '#ffffff'}
          hidesWhenStopped={hide}
          size={size || 'large'}
          style={style}
        />
      </View>
    </Modal>
  );
};

export default Loader;
