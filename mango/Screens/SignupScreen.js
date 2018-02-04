import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Constants, Location, Permissions } from 'expo';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label, CheckBox } from 'native-base';

function storeData(email, data) {
  firebase.database().ref('users/' + email.split("@")[0]).set(data);
}

function initMatchData(email) {
  firebase.database().ref('users/' + email.split("@")[0] + '/matches').set(({init: ''}));
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
      confirm_password: '',
      latitude: null,
      longitude: null,
      location: null
    })
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    // Get the current position of the user as an Json object
    this.state.location = await Location.getCurrentPositionAsync({});
  }

  signUpUser() {
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
    }
    else {

      if (this.state.password.length < 6) {
          alert("Please enter atleast 6 characters")
          return;
      }
      if (this.state.password != this.state.confirm_password){
          alert("Passwords do not match")
          return;
      } 

      firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data)=>{
          console.log(data)
          console.log(this.state.email)
          for(let i= 0; i< 100; i++){
            if(this.state.location != null || this.state.location != undefined){    
                this.state.latitude = JSON.stringify(this.state.location.coords.latitude);
                this.state.longitude = JSON.stringify(this.state.location.coords.longitude);
                break;
            }
            else{
                this._getLocationAsync();
                console.log(i)
            }}
          console.log(this.state)
          storeData(this.state.email, this.state)
          initMatchData(this.state.email)
          email = this.state.email
          alert("Let's take a quiz to find your matches!")
          if(this.state.age >= 50){
            this.props.navigation.navigate("QuizScreen2",{email})
          } else {
            this.props.navigation.navigate("QuizScreen",{email})
          }
        })
        .catch(function(error) {
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/invalid-email') {
            alert('Invalid Email Format');
          } else {
            alert(errorMessage);
          }
        })
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
            onPress={this.signUpUser.bind(this)}
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
