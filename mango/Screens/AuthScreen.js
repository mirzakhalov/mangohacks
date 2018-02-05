import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

class AuthScreen extends React.Component {
  constructor(props){
    super(props)
    this.email = this.props.navigation.state.params.email
    this.state = ({
        master_code: "grow2gether",
        code: ''
    })

  }
  checkCode(){
      if(this.state.code == this.state.master_code){
          email = this.email
          this.props.navigation.navigate("QuizScreen2",{email})
      }
      else {
          alert("Code not recognized")
      }
  }

  render() {
    return (
        <Container style={styles.container} >
       
            <Form>
            <Image
                style = {{marginBottom: 60, alignSelf: 'center', height: 350, width: 350}}
                source={require("../assets/logo.png")}/>
            <Image/>
        
            <Item floatingLabel>
                <Label style={{padding: 5}}>Authentication</Label>
                <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(code) => this.setState({ code })}
                />
            </Item>

            <Button style={{ marginTop: 50, marginBottom: 150 }}
                full
                rounded
                primary
                onPress={() => this.checkCode()}
            >
                <Text style={{color:'white'}}>Submit</Text>
            </Button>
            <Text style = {{textAlign: "center" }}> Make connections that span generations. </Text>
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
  
    },
  });

export default AuthScreen;