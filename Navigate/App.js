import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Initial from './Initial';
import Main from './Main';

const App = StackNavigator({
  Initial: { screen: Initial},
  Main: {screen: Main},
})

export default class InitialScreen extends React.Component {
  render() {
    return (
      <App/>
    );
  }

}
