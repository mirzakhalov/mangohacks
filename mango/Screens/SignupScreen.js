import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

function storeData(email, data) {
  firebase.database().ref('users/' + email.split("@")[0]).set(data);
}

let temp;
function getData(email) {
  firebase.database().ref('users/' + email.split("@")[0]).on('value',function(snapshot) {
    console.log(snapshot.val());
    temp = snapshot.val(); 
  });
}

class SignupScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = ({
      first_name: '',
      last_name: '',
      age: '',
      phone_number: '',
      email: '',
      password: '',
      confirm_password: ''
    })

  }

  signUpUser = () => {
    if (!(
      this.state.first_name != '' &&
      this.state.last_name != '' &&
      this.state.age != '' &&
      this.state.phone_number != '' &&
      this.state.email != '' &&
      this.state.password != '' &&
      this.state.confirm_password != '')
    ){
      alert("Please fill all the information")
      return;
    } else {

      if (this.state.password.length < 6) {
          alert("Please enter atleast 6 characters")
          return;
      }
      if (this.state.password != this.state.confirm_password){
          alert("Passwords do not match")
          return;
      } 

      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => 
      {
        alert(error.toString())
      })

      try {
        storeData(this.state.email, this.state)
        getData(this.state.email)
        console.log(temp)
      } catch (error) {
        alert("ERROR When uploading data. Try Again Later")
        return
      }
    }
}


  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label style={{padding: 5}}>First Name</Label>
            <Input
              autoCorrect={false}
              onChangeText={(first_name) => this.setState({ first_name })}
            />
          </Item>
          
          <Item floatingLabel>
            <Label style={{padding: 5}}>Last Name</Label>
            <Input
              autoCorrect={false}
              onChangeText={(last_name) => this.setState({ last_name })}
            />
          </Item>

          <Item floatingLabel>
            <Label style={{padding: 5}}>Age</Label>
            <Input
              autoCorrect={false}
              onChangeText={(age) => this.setState({ age })}
            />
          </Item>

          <Item floatingLabel>
            <Label style={{padding: 5}}>Phone Number</Label>
            <Input
              autoCorrect={false}
              onChangeText={(phone_number) => this.setState({ phone_number })}
            />
          </Item>

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

          <Item floatingLabel>
            <Label style={{padding: 5}}>Confirm Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(confirm_password) => this.setState({ confirm_password })}
            />
          </Item>

          <Button style={{ marginTop: 50 }}
            full
            rounded
            success
            onPress={() => this.signUpUser()}
          >
            <Text style={{color:'white'}}>Get Started</Text>
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
    
  }
});

export default SignupScreen;
