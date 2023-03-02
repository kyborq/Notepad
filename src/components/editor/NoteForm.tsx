import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconButton } from '../IconButton';

type Props = {
  onSubmit?: (text: string) => void;
};

export const NoteForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!!text) {
      onSubmit && onSubmit(text);
      setText('');
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.field}>
        <TextInput
          placeholder="Текстовая заметка..."
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          style={styles.input}
          value={text}
          blurOnSubmit
          multiline
        />
      </View>
      {!text ? (
        <View style={styles.actions}>
          <IconButton icon="task" />
          <IconButton icon="image" />
        </View>
      ) : (
        <IconButton icon="send" onPress={handleSubmit} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 24,
    gap: 24,
  },
  actions: {
    flexDirection: 'row',
  },
  field: {
    flex: 1,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
});
