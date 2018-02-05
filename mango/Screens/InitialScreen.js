import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

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
        <Container style={styles.container} >
       
        <Form>
          <Image
              style = {{marginBottom: 60, alignSelf: 'center', height: 350, width: 350}}
              source={require("../assets/logo.png")}/>
          <Image/>
    
          <Button style={{ marginTop: 0 }}
            full
            rounded
            success
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            <Text style={{color:'white'}}>Login</Text>
          </Button>

          <Button style={{ marginTop: 20, marginBottom: 40 }}
            full
            rounded
            primary
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            <Text style={{color:'white'}}>Sign Up</Text>
          </Button>
          <Text style = {{textAlign: "center" , marginBottom: 100, color:'green'}}> Thanks for trying our new alpha version. Bug fixes and many other features are on the way. Thanks for your support :) </Text>
          <Text style = {{textAlign: "center" }}> "Make connections that span generations. </Text>
        </Form>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    padding: 20
  },
});
