import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native'; // 0.19.0

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

import "@expo/vector-icons"; // 6.2.2

export default class AssetExample extends Component {
  constructor(props){
    super(props)

    this.state = ({
      description: ""
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          What would you like in your Bio page?
        </Text>
        <Item floatingLabel>
            <Label style={{padding: 5}}>Answer Here</Label>
            <Input
              autoCorrect={false}
              onChangeText={(description) => this.setState({ description })}
            />
          </Item>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});