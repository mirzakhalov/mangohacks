import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class Login extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
    })

  }

  render() {
    return (
        <Container style={styles.container}>
        <Form>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            <Text style={{color:'white'}}>Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            <Text style={{color:'white'}}>Sign Up</Text>
          </Button>

        </Form>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});