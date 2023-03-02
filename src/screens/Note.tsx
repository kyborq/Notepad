import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NoteProps } from '../components/navigation/StackNavigator';
import { useAppSelector } from '../store/hooks';

export const Note = ({ navigation, route }: NoteProps) => {
  const { id, book } = route.params;

  const currentBook = useAppSelector(state => {
    const allBooks = [...state.books.books, state.books.draft];
    const needBook = allBooks.find(b => b.id === book);
    return needBook;
  });

  const currentNote =
    currentBook && currentBook.notes.find(note => note.id === id);

  useEffect(() => {
    if (currentBook) {
      navigation.setOptions({
        title: `Заметка из ${currentBook.title}`,
      });
    }
  }, [currentBook]);

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{currentNote?.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
});
