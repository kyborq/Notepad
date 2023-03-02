import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { DrawerNavigator } from './DrawerNavigator';
import { Note } from '../../screens/Note';

export type StackParamList = {
  Root: undefined;
  Home: undefined;
  Note: { book?: string; id: string };
};

export type HomeProps = StackScreenProps<StackParamList, 'Home'>;
export type NoteProps = StackScreenProps<StackParamList, 'Note'>;

const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Note" component={Note} />
    </Stack.Navigator>
  );
};
