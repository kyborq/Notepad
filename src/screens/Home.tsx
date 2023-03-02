import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { NoteCard } from '../components/editor/NoteCard';
import { NoteForm } from '../components/editor/NoteForm';
import { IconButton } from '../components/IconButton';
import { HomeProps } from '../components/navigation/StackNavigator';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  addNoteDraft,
  deleteNoteDraft,
  TNote,
} from '../store/slices/bookSlice';
import { uuid4 } from '../utils/uuid4';

export const Home = ({ navigation, route }: HomeProps) => {
  const dispatch = useAppDispatch();
  const { draft } = useAppSelector(state => state.books);

  const notes = draft?.notes || [];

  const handleAddNote = (text: string) => {
    dispatch(addNoteDraft(text));
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNoteDraft(id));
  };

  const handleEditNote = (id: string) => {
    navigation.navigate('Note', {
      book: draft.id,
      id,
    });
  };

  const notesList = notes.map((note: TNote) => (
    <NoteCard
      key={uuid4()}
      note={note}
      onDelete={handleDeleteNote}
      onPress={handleEditNote}
    />
  ));

  return (
    <View>
      <View style={styles.content}>
        {!!notes.length ? (
          notesList
        ) : (
          <Text style={styles.empty}>Пусто, добавьте первую заметку</Text>
        )}
      </View>
      <NoteForm onSubmit={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    shadowColor: '#c7c7c7',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingBottom: 16,
    elevation: 9,
  },
  empty: {
    fontSize: 13,
    color: '#c7c7c7',
    marginHorizontal: 24,
  },
});
