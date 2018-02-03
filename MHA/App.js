import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC5h4oiZzh44YcGj7DeqLuI_JYFNiM8si4",
    authDomain: "react-firebase-ed55c.firebaseapp.com",
    databaseURL: "https://react-firebase-ed55c.firebaseio.com",
    projectId: "react-firebase-ed55c",
    storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

function storeData(email, data) {
  firebase.database().ref('users/' + email.split("@")[0]).set({
    data: data
  });
}

function getData(email) {
  firebase.database().ref('users/' + email.split("@")[0]).on('value',function(snapshot) {
    console.log(snapshot.val().data);
  });
}

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class Login extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })

  }

  signUpUser = (email,password) => {
    try{
      if(this.state.password.length < 6)
      {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }catch(error){
      console.log(error.toString())
    }

  }

  loginUser = (email,password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
        //console.log(user)
        storeData(email,password)
        getData(email)
      })
    }catch(error){
      console.log(error.toString())
    }
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          
          <Item>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email,this.state.password)}
          >
            <Text style={{color:'white'}}>Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email,this.state.password)}
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
