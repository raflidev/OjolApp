import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
