import React from 'react';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { TIcon } from '../icons';
import { Icon } from './Icon';

type Props = {
  icon: TIcon;
  small?: boolean;
  onPress?: () => void;
};

export const IconButton: React.FC<Props> = ({ icon, small, onPress }) => {
  const size = small ? 24 : 48;

  return (
    <View
      style={[
        styles.overflow,
        { width: size, height: size, overflow: small ? 'visible' : 'hidden' },
      ]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
          <Icon name={icon} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  overflow: {
    overflow: 'hidden',
    borderRadius: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
