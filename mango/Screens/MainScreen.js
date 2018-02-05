import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
import { Button } from 'native-base';

import * as firebase from 'firebase';

function storeData(email, data) {
  firebase.database().ref('users/' + email.split("@")[0]).set(data);
}

let temp, temp2;
function getEmailList() {
  firebase.database().ref('emails').on('value',function(snapshot) {
    console.log(snapshot.val());
    temp = snapshot.val(); 
  });
}

function updateEmailList(email) {
  getEmailList();
  if(temp == undefined){
    console.log(temp)
    firebase.database().ref('emails').set(email);
  } else {
    console.log(temp)
    firebase.database().ref('emails').set(temp + "|||" + email);
  }
}

function updateMatchList(email,new_email) {
  getMatchList(email);
  if(temp == undefined){
    console.log(temp)
    firebase.database().ref('users/' + email.split("@")[0] + '/matches').set(new_email);
  } else {
    console.log(temp)
    firebase.database().ref('users/' + email.split("@")[0] + '/matches').set(temp + "|||" + new_email);
  }
}

function getMatchList(email) {
  firebase.database().ref('users/' + email.split("@")[0] + '/matches').on('value',function(snapshot) {
    console.log(snapshot.val());
    temp = snapshot.val(); 
  });
}

function initMatchData(email) {
  firebase.database().ref('users/' + email.split("@")[0] + '/matches').set((""));
}

function getData(email) {
  firebase.database().ref('users/' + email.split("@")[0]).on('value',function(snapshot) {
    console.log(snapshot.val());
    temp = snapshot.val(); 
  });
}

class MainScreen extends React.Component {
  constructor(props){
    super(props)
    this.email = this.props.navigation.state.params.email;
    this.itr = 0;
  }

  showMatches(email) {
    getMatchList(email)
    let martches = ""
    try {
      matches = temp.split("|||")
    } catch (error) {
      console.log(error)
    }
    
    //To be continued
    alert("Still looking for matches...")
    
  }

  go2Quiz(){
    email = this.email
    this.props.navigation.navigate("QuizScreen2",{email})
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Button style={{ marginTop: 40, padding: 10  }}
            full
            rounded
            success
            onPress={() => this.showMatches(this.email)}
          >
            <Text style={{color:'white'}}>Refresh</Text>
          </Button>

          <Button style={{ marginTop: 40, padding: 10  }}
            full
            rounded
            primary
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
