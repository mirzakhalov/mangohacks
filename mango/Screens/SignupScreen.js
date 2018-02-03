import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, FlatList} from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return (
      <FlatList contentContainerStyle={styles.container}>
        <TextInput 
            style = {styles.text_input}
            placeholder = "Name"
        />
        <TextInput 
            style= {styles.text_input}
            placeholder = "Age"
        />
        <TextInput 
            style= {styles.text_input}
            placeholder = "Email"
        />
        <TextInput 
            style= {styles.text_input}
            placeholder = "Password"
        />
        <TextInput 
            style= {styles.text_input}
            placeholder = "Confirm Password"
        />
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 25,
    marginBottom: 0,
    padding: 25,
    
  },

  text_input: {
    flex: 1,
    width: 150,
    alignItems: 'flex-start',
    padding: 0,
    margin: 0,
  }
});

export default SignupScreen;
