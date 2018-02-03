import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

class LoginScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })

  }

  loginUser = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else if (errorCode === 'auth/user-not-found') {
        alert('User not found. ');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    
    
  }

  render() {
    return (
        <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label style={{padding: 5}}>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          
          <Item floatingLabel>
            <Label style={{padding: 5}}>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 50 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email,this.state.password)}
          >
            <Text style={{color:'white'}}>Login</Text>
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

export default LoginScreen;
