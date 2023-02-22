import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Form} from './src/components/Form';
import {Header} from './src/components/Header';
import {Note} from './src/components/Note';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header title="iSpace" />
      <View>
        <ScrollView>
          <Note
            time="08:11"
            text="Срок сдачи всех долгов первое марта. После этого срока никого не отчисляют, кроме тех кто хочет отчислиться сам"
          />
          <Note time="08:11" text="Lorem ipsum sit dolor amet" />
          <Form />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
