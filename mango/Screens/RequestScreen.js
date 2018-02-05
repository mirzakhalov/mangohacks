import React from 'react';
import { StyleSheet, Text, View, Image, BackAndroid } from 'react-native';
import { Button } from 'native-base';
import MatchScreen from "./MatchScreen";

let i = 0;
function storeData(email, data) {
  firebase.database().ref('users/' + email.split("@")[0]).set(data);
}

let temp_lat, temp_lon;
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

let names = new Array();
names = ["Darcy Lynn", "Steven Robinson","Juliana Keller", "Shaniqua Robles" ]
let ages = new Array();
ages = [75, 78, 75, 68];
let hobbies = new Array();
hobbies = ["Former astronaut", "Boardgames, watching football", "Into antique cars, card games fan, baseball", "Tai Chi, Watching movies, Talking to people",]
let bios = new Array();
let image_paths = new Array();
image_paths = ['old_person_6.png', 'Steven.png', 'Juliana.png']
class RequestScreen extends React.Component {

    
    backup(n) {
        return [names[n], ages[n], hobbies[n], bios[n], image_paths[n]];
    }
    
    render() {
       // console.log(this.props.navigation.state.params.emails)
        //let theEmailArray = MatchScreen.fetchTheEmailArray()
        if(i >= 4){
          alert("No more matches are found!")
        }
        responses = this.backup(i)
        i++;
        
        return (
        <View style = {styles.bigcontainer}>
            <View style = {{marginBottom: 250, fontsize: 35, }}>
            <Image source= {(i == 1 ? require('../assets/old_person_6.png') :
              (i == 2 ? require('../assets/Steven.png') :
              (i == 3 ? require('../assets/Juliana.png') :
              (i == 4 ? require('../assets/sh.jpg') :
              require('../assets/download.png')))))}>
            
              </Image>
            <Text style = {{marginTop: 10, fontsize: 70, alignSelf: "center" }}> Name: {responses[0]} </Text>
            <Text style = {{marginTop: 10, fontsize: 70, alignSelf: "center"}} > Age: {responses[1]} </Text>
            <Text style = {{marginTop: 10, fontsize: 70, alignSelf: "center"}}> Hobbies: {responses[2]}  </Text>   
            </View>
            <Button style={{  }}
            full
            rounded
            success
            onPress={() => alert(responses[0] +  " will be notified!")}
          >
            <Text style={{color:'white'}}>Schedule A Meeting</Text>
          </Button>

          <Button style={{ marginTop: 20, marginBottom: 40 }}
            full
            rounded
            primary
            onPress={() => this.forceUpdate()}
          >
            <Text style={{color:'white'}}>Maybe Not</Text>
          </Button>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bioinfo: {
      flex: 1,
      backgroundColor: '#0ce',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 0,
      marginBottom: 50,
      marginRight: 0,
      height: 100,
      width: 200
  },
  button: {
     
      alignSelf: 'flex-start', 
      backgroundColor: '#0f0',
      height: 150,
      width: 150,
      left: 0,
      marginBottom: 100
  }

});

export default RequestScreen;
