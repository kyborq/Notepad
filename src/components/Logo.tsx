import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from './Icon';

export const Logo = () => {
  return (
    <View style={styles.logo}>
      <Icon name="booklet" />
      <Text style={styles.title}>Notepad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
  },
});
