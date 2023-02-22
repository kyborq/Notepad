import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from './Icon';

type Props = {
  title: string;
};

export const Header = ({title}: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Icon name="menu" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Icon name="settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    height: 80,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
});
