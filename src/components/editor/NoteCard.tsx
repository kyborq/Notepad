import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { TNote } from '../../store/slices/bookSlice';
import { uuid4 } from '../../utils/uuid4';
import { IconButton } from '../IconButton';

type Props = {
  note: TNote;
  onDelete?: (id: string) => void;
  onBookmark?: (id: string) => void;
  onPress?: (id: string) => void;
};

export const NoteCard = ({ note, onDelete, onBookmark, onPress }: Props) => {
  const handleDelete = () => {
    onDelete && onDelete(note.id);
  };

  const handleBookmark = () => {
    onBookmark && onBookmark(note.id);
  };

  const handlePress = () => {
    onPress && onPress(note.id);
  };

  const rightActions = () => {
    return (
      <View style={styles.actions}>
        <IconButton icon="trash" onPress={handleDelete} />
      </View>
    );
  };

  const leftActions = () => {
    return (
      <View style={styles.actions}>
        <IconButton icon="bookmark" onPress={handleBookmark} />
      </View>
    );
  };

  return (
    <Swipeable
      key={uuid4()}
      renderLeftActions={leftActions}
      renderRightActions={rightActions}>
      <TouchableNativeFeedback onPress={handlePress}>
        <View style={styles.card}>
          {!!note.created && <Text style={styles.time}>{note.created}</Text>}
          {!!note.text && <Text style={styles.text}>{note.text}</Text>}
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  time: {
    fontSize: 10,
    color: '#c7c7c7',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
  actions: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});
