import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

type Props = {
  time?: string;
  text?: string;
  onPress?: () => void;
};

export const Note = ({time, text, onPress}: Props) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        {!!time && <Text style={styles.time}>{time}</Text>}
        {!!text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  time: {
    fontSize: 12,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
  },
});
