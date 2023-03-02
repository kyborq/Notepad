import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { TIcon } from '../../icons';
import { Icon } from '../Icon';

type Props = {
  icon: TIcon;
  label: string;
  indicator?: number;
  onPress?: () => void;
};

export const NavButton: React.FC<Props> = ({
  icon,
  label,
  indicator,
  onPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Icon name={icon} />
          <Text style={styles.label}>{label}</Text>
        </View>

        {!!indicator && indicator > 0 && (
          <View style={styles.indicator}>
            <Text style={styles.number}>{indicator}</Text>
          </View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
