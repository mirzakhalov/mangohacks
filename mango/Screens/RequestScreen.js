import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import MatchScreen from "./MatchScreen";

class RequestScreen extends React.Component {

    render() {
        console.log(this.props.navigation.state.params.emails)
        //let theEmailArray = MatchScreen.fetchTheEmailArray();
        return (
        <View style={styles.bigcontainer}>
            
            <Image style = {styles.bioinfo}
            source={require('../assets/download.png')}/>
            <Image/>     
            
            <Button 
                style = {styles.button}
                title = "I will meet you!"
                onPress = {() => (true)}
            />
            <Button 
                style = {styles.button}
                title = "I will meet you!"
                onPress = {() => (true)}
            />
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
      marginBottom: 250,
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
