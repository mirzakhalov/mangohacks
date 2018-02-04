import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import InitialScreen from './Screens/InitialScreen';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import MatchScreen from './Screens/MatchScreen';
import RequestScreen from './Screens/RequestScreen';
import SignupScreen from './Screens/SignupScreen';
import QuizScreen from './Screens/QuizScreen';
import QuizScreen2 from './Screens/QuizScreen2';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC5h4oiZzh44YcGj7DeqLuI_JYFNiM8si4",
    authDomain: "react-firebase-ed55c.firebaseapp.com",
    databaseURL: "https://react-firebase-ed55c.firebaseio.com",
    projectId: "react-firebase-ed55c",
    storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <Screens/>
    );
  }
}
const Screens = StackNavigator({
  InitialScreen: { screen: InitialScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  MainScreen: { screen: MainScreen },
  MatchScreen: { screen: MatchScreen },
  QuizScreen: { screen: QuizScreen },
  QuizScreen2: { screen: QuizScreen2 },
  RequestScreen: { screen: RequestScreen }
})

