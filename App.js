
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import DisplayCardScreen from './screens/DisplayCardScreen';

const App = () => {
  return (
    <Nav />
  );
};

const TabNavigator = createBottomTabNavigator({
  Home:{
    screen: createStackNavigator({
      HomeScreen: { screen: HomeScreen },
      DisplayCardScreen: { screen: DisplayCardScreen },
    })
  },
  Task: {
    screen: createStackNavigator({
      TaskScreen: { screen: TaskScreen },
     
    })
  },

});


const Nav = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
