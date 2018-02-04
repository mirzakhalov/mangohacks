import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import * as firebase from 'firebase';
import RequestScreen from "./RequestScreen";

let updated_emails = new Array();
let emails = new Array();
function storeData(email, data) {
    firebase.database().ref('users/' + email.split("@")[0]).set(data);
  }
  

  let temp_lat, temp_lon, temp;;
 

class MatchScreen extends Component {
  
  
state = {
    location: null,
    errorMessage: null,
  };
// Checking if the device connected is an emulator
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }
// Asking the user to allow location permissions
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    // Get the current position of the user as an Json object
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  // Calculates the distance between two GPS coordinates
  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  // Turns the degree in radian
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  getTheLatitude(){
    let temp_lats = new Array()
    let i = 0;
    var ref = firebase.database().ref('users');
    ref.orderByChild("latitude").on("value", function(snapshot) {
        temp_lats[i] = snapshot.val().latitude; 
        emails[i] = snapshot.val().email;
        i++;
        console.log(snapshot.val().latitude)
    });
   
    return temp_lats;
  }

  getTheLongitude(){
    let temp_lons = new Array()
    let i = 0;
    var ref = firebase.database().ref('users');
    ref.orderByChild("longitude").on("value", function(snapshot) {
        temp_lons[i] = snapshot.val().longitude; 
        i++;
    });
    return temp_lons;
  }

    getData() {
        firebase.database().ref('users').on('child_added',function(snapshot) {
            console.log(snapshot.val());
            temp = snapshot.key; 
        });
        //console.log(temp)
    }
  
  getMatchings(lat, lon){
    let i = 0; let temp_lats = new Array(); let temp_lons = new Array();
    
    temp_lats = this.getTheLatitude();
   // console.log(temp_lats);
    temp_lons = this.getTheLongitude();
   // console.log(temp_lons);
    for(j = 0; j < 4; j++){
        //console.log(this.latitude + " " + this.longitude + " " + temp_lats[j] + " " + temp_lons[j]);
        //console.log(temp_lats)
        distance = this.getDistanceFromLatLonInKm(lat, lon, temp_lats[j], temp_lons[j]);
        //console.log(distance);
        if(distance < 50){
            updated_emails[k] = emails[j];
            k++;
            
        }

    }
    //console.log(updated_emails);
    this.props.navigation.navigate('RequestScreen', {emails: updated_emails});
    
}
  render() {
    // This text variable is probably temporary
    let text = 'Waiting..';
    // Emails of users to be matched
    let emails = new Array();
    // Has to be saved to the database
    for(let i= 0; i< 10; i++){
    if(this.state.location != null || this.state.location != undefined){    
        let latitude = JSON.stringify(this.state.location.coords.latitude);
        let longitude = JSON.stringify(this.state.location.coords.longitude);
        text = latitude + " , " + longitude;
        break;
    }
    else{
        this._getLocationAsync();
    }}
    let distance = this.getDistanceFromLatLonInKm(25.726173, -82.83726, 26.762681, -80.83728);
    return (
      <View>
        <Button 
        title = "FIND"
        style = {styles.button}
        onPress = {() => this.getMatchings()}
        />
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