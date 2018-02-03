import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Initial extends React.Component {
  
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
      <Button onPress = {() => this.props.navigation.navigate('Main')}
      title = "Click me"
      />
      </View>
    );
  }
}

export default Initial;
