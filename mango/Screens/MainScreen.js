import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';

let temp;
function getMatches(email) {
  firebase.database().ref('users/' + email.split("@")[0] + "/matches").on('value',function(snapshot) {
    console.log(snapshot.val());
    temp = snapshot.val(); 
  });
}

class MainScreen extends React.Component {
  constructor(props){
    super(props)
    this.email = this.props.navigation.state.params.email
  }

  showMatches(email) {
    getMatches(email)
    console.log(temp)
  }

  go2Quiz(){
    email = this.email
    this.props.navigation.navigate("QuizScreen2",{email})
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Button style={{ marginTop: 50 }}
            full
            rounded
            success
            onPress={() => this.showMatches(this.email)}
          >
            <Text style={{color:'white'}}>Refresh</Text>
          </Button>
          <Button style={{ marginTop: 50 }}
            full
            rounded
            success
            onPress={() => this.go2Quiz()}
          >
            <Text style={{color:'white'}}>Retake Quiz</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color:'#ffdb4d',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
