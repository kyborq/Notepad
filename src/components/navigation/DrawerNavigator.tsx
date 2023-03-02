import React from 'react';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import { DrawerContent } from './DrawerContent';

import { Header } from '../Header';
import { Home } from '../../screens/Home';
import { Bookmarks } from '../../screens/Bookmarks';
import { Trash } from '../../screens/Trash';
import { Settings } from '../../screens/Settings';
import { Book } from '../../screens/Book';
import { Note } from '../../screens/Note';

export type RootParamList = {
  Home: undefined;
  Bookmarks: undefined;
  Trash: undefined;
  Settings: undefined;
  Book: { id: string } | undefined;
};

// export type HomeProps = DrawerScreenProps<RootParamList, 'Home'>;
export type BookmarksProps = DrawerScreenProps<RootParamList, 'Bookmarks'>;
export type TrashProps = DrawerScreenProps<RootParamList, 'Trash'>;
export type SettingsProps = DrawerScreenProps<RootParamList, 'Settings'>;
export type BookProps = DrawerScreenProps<RootParamList, 'Book'>;

const Drawer = createDrawerNavigator<RootParamList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Черновик',
        }}
      />
      <Drawer.Screen
        name="Book"
        component={Book}
        options={{
          title: 'Блокнот',
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: 'Сохраненное',
        }}
      />
      <Drawer.Screen
        name="Trash"
        component={Trash}
        options={{
          title: 'Корзина',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Настройки',
        }}
      />
    </Drawer.Navigator>
  );
};
