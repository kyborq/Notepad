import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { DrawerHeaderProps } from '@react-navigation/drawer';

import { IconButton } from './IconButton';

export const Header: React.FC<DrawerHeaderProps> = ({
  layout,
  navigation,
  options,
  route,
}) => {
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <View style={styles.header}>
      <IconButton icon="menu" onPress={openDrawer} />
      <Text style={styles.title}>{options.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
