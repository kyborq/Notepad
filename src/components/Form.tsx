import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon} from './Icon';

export const Form = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={{fontSize: 16, flex: 1, padding: 0}}
        multiline
        placeholder="Your text..."
        onChangeText={setText}
      />
      <View style={styles.actions}>
        {!text && <Icon name="image" />}
        {!text && <Icon name="checkBox" />}
        {!!text && <Icon name="send" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 1,
    marginTop: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-end',
  },
});
