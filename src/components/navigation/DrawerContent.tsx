import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../Logo';
import { NavButton } from './NavButton';
import { useAppSelector } from '../../store/hooks';

export const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { books } = useAppSelector(state => state.books);

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Logo />

        <View style={styles.navigation}>
          <Text style={styles.category}>Общее</Text>
          <NavButton
            icon="file"
            label="Черновик"
            onPress={() => navigation.navigate('Home')}
          />
          <NavButton
            icon="bookmark"
            label="Сохраненное"
            onPress={() => navigation.navigate('Bookmarks')}
          />
          <NavButton
            icon="trash"
            label="Корзина"
            onPress={() => navigation.navigate('Trash')}
          />

          {!!books.length && (
            <>
              <Text style={styles.category}>Блокноты</Text>
              {books.map(book => (
                <NavButton
                  icon="booklet"
                  label={book.title}
                  onPress={() =>
                    navigation.navigate('Book', {
                      id: book.id,
                    })
                  }
                />
              ))}
            </>
          )}
        </View>

        <NavButton icon="settings" label="Настройки" />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    paddingVertical: 24,
    flex: 1,
  },
  navigation: {
    flex: 1,
  },
  category: {
    marginTop: 32,
    fontSize: 12,
    marginHorizontal: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
