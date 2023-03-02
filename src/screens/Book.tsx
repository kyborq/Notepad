import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NoteCard } from '../components/editor/NoteCard';
import { NoteForm } from '../components/editor/NoteForm';
import { BookProps } from '../components/navigation/DrawerNavigator';

export const Book = ({ navigation, route }: BookProps) => {
  const id = route.params?.id;

  useEffect(() => {
    if (!!id) {
      // ...
    } else {
      // ...
    }
  }, [id]);

  return (
    <View>
      <View style={styles.content}></View>
      <NoteForm />
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
});
