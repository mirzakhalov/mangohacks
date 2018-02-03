import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import InitialScreen from './Screens/InitialScreen';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import MatchScreen from './Screens/MatchScreen';
import RequestScreen from './Screens/RequestScreen';
import SignupScreen from './Screens/SignupScreen';
import QuizScreen from './Screens/QuizScreen';

export default class App extends React.Component {
  render() {
    return (
      <Screens/>
    );
  }
}
const Screens = StackNavigator({
  //InitialScreen: { screen: InitialScreen },
  //LoginScreen: { screen: LoginScreen },
  //MainScreen: { screen: MainScreen },
  MatchScreen: { screen: MatchScreen },
  //QuizScreen: { screen: QuizScreen },
  //RequestScreen: { screen: RequestScreen },
  SignupScreen: { screen: SignupScreen }
})

