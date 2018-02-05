import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Button } from 'native-base';

import * as firebase from 'firebase';
import RequestScreen from "./RequestScreen";

class MatchScreen extends Component {
  constructor(props){
    super(props)
    this.email = this.props.navigation.state.params.email;
    this.itr = 0;
  }

  go2Quiz(){
    email = this.email
    this.props.navigation.navigate("QuizScreen",{email})
  }
  go2Request(){
    email = this.email
    this.props.navigation.navigate("RequestScreen",{email})
  }

  render() {
    return (
      <View>
        <Button style={{ marginTop: 275}}
            full
            rounded
            success
            onPress={() => this.go2Request()}
          >
            <Text style={{color:'white'}}>Find</Text>
          </Button>

          <Button style={{ marginTop: 40, marginBottom: 40}}
            full
            rounded
            primary
            onPress={() => this.go2Quiz()}
          >
            <Text style={{color:'white'}}>Retake Quiz</Text>
          </Button>
        </View>

        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginTop: 250,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MatchScreen;