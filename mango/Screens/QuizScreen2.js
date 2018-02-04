import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, CheckBox } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { Constants } from 'expo';

import * as firebase from 'firebase';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

class QuizScreen2 extends React.Component {
  constructor(props){
    super(props)

    this.state = ({
      q1_checked: [false,false,false,false,false,false],
      q2_checked: [false,false,false],
      q3_checked: [false,false,false,false,false],
      q4_description: '',
      q5_checked: [
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false
      ],
      q6_checked: [
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false
      ],
      q7_description: ''
    })

  }

  uploadQuizData(email, data) {
    if(this.state.q4_description != '' && this.state.q7_description != ''){
        console.log(email)
        firebase.database().ref('users/' + email.split("@")[0] + '/answers/').set(data);
        alert("New data uploaded")
        this.props.navigation.navigate("MainScreen",{email}) 
    } else {
        alert("Insufficient data")
    }
  }

  q1_checkBoxTest(i){
    pre_checked = this.state.q1_checked
    pre_checked[i] = !pre_checked[i]
    this.setState({
      q1_checked:pre_checked
    })
    console.log(this.state.q1_checked)
  }

  q2_checkBoxTest(i){
    pre_checked = this.state.q2_checked
    pre_checked[i] = !pre_checked[i]
    this.setState({
      q2_checked:pre_checked
    })
    console.log(this.state.q2_checked)
  }

  q3_checkBoxTest(i){
    pre_checked = this.state.q3_checked
    pre_checked[i] = !pre_checked[i]
    this.setState({
      q2_checked:pre_checked
    })
    console.log(this.state.q3_checked)
  }

  q5_checkBoxTest(i){
    pre_checked = this.state.q5_checked
    pre_checked[i] = !pre_checked[i]
    this.setState({
      q2_checked:pre_checked
    })
    console.log(this.state.q5_checked)
  }

  q6_checkBoxTest(i){
    pre_checked = this.state.q6_checked
    pre_checked[i] = !pre_checked[i]
    this.setState({
      q6_checked:pre_checked
    })
    console.log(this.state.q6_checked)
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView contentContainerstyle={styles.container}>
          <Card title="Question 1">


            <View style={styles.container}>
              <Text style={styles.paragraph}>
                What skills can you offer as a mentor?
              </Text>
              <Text>
                Career guidance
              </Text>
              <CheckBox
                value={this.state.q1_checked[0]}
                onChange={()=>this.q1_checkBoxTest(0)}
              />

              <Text>
                Compassion
              </Text>
              <CheckBox
                value={this.state.q1_checked[1]}
                onChange={()=>this.q1_checkBoxTest(1)}
              />

              <Text>
                General life advice
              </Text>
              <CheckBox
                value={this.state.q1_checked[2]}
                onChange={()=>this.q1_checkBoxTest(2)}
              />


              <Text>
                Emotional support
              </Text>
              <CheckBox
                value={this.state.q1_checked[3]}
                onChange={()=>this.q1_checkBoxTest(3)}
              />


              <Text>
                Academic advice
              </Text>
              <CheckBox
                value={this.state.q1_checked[4]}
                onChange={()=>this.q1_checkBoxTest(4)}
              />

              
              <Text>
                Health advice
              </Text>
              <CheckBox
                value={this.state.q1_checked[5]}
                onChange={()=>this.q1_checkBoxTest(5)}
              />


            </View>
          </Card>
          <Card title="Question 2">
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                What skills would you like to learn?
              </Text>
                <Text>
                  Technology
                </Text>
                
                <CheckBox
                  value={this.state.q2_checked[0]}
                  onChange={()=>this.q2_checkBoxTest(0)}
                />

                <Text>
                  Contemporary culture
                </Text>
                <CheckBox
                  value={this.state.q2_checked[1]}
                  onChange={()=>this.q2_checkBoxTest(1)}
                />

                <Text>
                  Personal interests or hobbies
                </Text>
                <CheckBox
                  value={this.state.q2_checked[2]}
                  onChange={()=>this.q2_checkBoxTest(2)}
                />
            </View>


          </Card>
          <Card title="Question 3">
            
            
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                Which of the following best describe your past achievements?
              </Text>
              <Text>
                Career success
              </Text>
              
              <CheckBox
                value={this.state.q3_checked[0]}
                onChange={()=>this.q3_checkBoxTest(0)}
              />

              <Text>
                Successful interpersonal relations
              </Text>

              <CheckBox
                value={this.state.q3_checked[1]}
                onChange={()=>this.q3_checkBoxTest(1)}
              />

              <Text>
                Financial success
              </Text>

              <CheckBox
                value={this.state.q3_checked[2]}
                onChange={()=>this.q3_checkBoxTest(2)}
              />
              
              <Text>
                Consistent emotional satisfaction
              </Text>

              <CheckBox
                value={this.state.q3_checked[3]}
                onChange={()=>this.q3_checkBoxTest(3)}
              />
              
              <Text>
                Good health
              </Text>

              <CheckBox
                value={this.state.q3_checked[4]}
                onChange={()=>this.q3_checkBoxTest(4)}
              />
            </View>

          </Card>
          <Card title="Question 4">
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                What are your hobbies and interests?
              </Text>
              <Item floatingLabel>
                  <Label style={{padding: 5}}>Answer Here</Label>
                  <Input
                    autoCorrect={false}
                    onChangeText={(q4_description) => this.setState({ q4_description })}
                  />
                </Item>

            </View>
          </Card>
          <Card title="Question 5">
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                Which of the following traits are you looking for in a mentee?
              </Text>

              <Text>
                Imaginative
              </Text>
              
              <CheckBox
                value={this.state.q5_checked[0]}
                onChange={()=>this.q5_checkBoxTest(0)}
              />

              <Text>
                Practical
              </Text>

              <CheckBox
                value={this.state.q5_checked[1]}
                onChange={()=>this.q5_checkBoxTest(1)}
              />

              <Text>
                Friendly
              </Text>

              <CheckBox
                value={this.state.q5_checked[2]}
                onChange={()=>this.q5_checkBoxTest(2)}
              />
              
              <Text>
                Ambitious
              </Text>

              <CheckBox
                value={this.state.q5_checked[3]}
                onChange={()=>this.q5_checkBoxTest(3)}
              />
              
              <Text>
                Flexible
              </Text>

              <CheckBox
                value={this.state.q5_checked[4]}
                onChange={()=>this.q5_checkBoxTest(4)}
              />

              <Text>
                Organized
              </Text>
              
              <CheckBox
                value={this.state.q5_checked[5]}
                onChange={()=>this.q5_checkBoxTest(5)}
              />

              <Text>
                Generous
              </Text>

              <CheckBox
                value={this.state.q5_checked[6]}
                onChange={()=>this.q5_checkBoxTest(6)}
              />

              <Text>
                Self-Reliant
              </Text>

              <CheckBox
                value={this.state.q5_checked[7]}
                onChange={()=>this.q5_checkBoxTest(7)}
              />
              
              <Text>
                Calm
              </Text>

              <CheckBox
                value={this.state.q5_checked[8]}
                onChange={()=>this.q5_checkBoxTest(8)}
              />
              
              <Text>
                Hardworking
              </Text>

              <CheckBox
                value={this.state.q5_checked[9]}
                onChange={()=>this.q5_checkBoxTest(9)}
              />

              <Text>
                Open-Minded
              </Text>
              
              <CheckBox
                value={this.state.q5_checked[10]}
                onChange={()=>this.q5_checkBoxTest(10)}
              />

              <Text>
                Perceptive
              </Text>

              <CheckBox
                value={this.state.q5_checked[11]}
                onChange={()=>this.q5_checkBoxTest(11)}
              />

              <Text>
                Compassionate
              </Text>

              <CheckBox
                value={this.state.q5_checked[12]}
                onChange={()=>this.q5_checkBoxTest(12)}
              />
              
              <Text>
                Principled
              </Text>

              <CheckBox
                value={this.state.q5_checked[13]}
                onChange={()=>this.q5_checkBoxTest(13)}
              />
              
              <Text>
                Curious
              </Text>

              <CheckBox
                value={this.state.q5_checked[14]}
                onChange={()=>this.q5_checkBoxTest(14)}
              />

              <Text>
                Honest
              </Text>

              <CheckBox
                value={this.state.q5_checked[15]}
                onChange={()=>this.q5_checkBoxTest(15)}
              />

            </View>

          </Card>
          <Card title="Question 6">
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                Which of the following traits best describe your personality?
              </Text>
              <Text>
                Imaginative
              </Text>
              
              <CheckBox
                value={this.state.q6_checked[0]}
                onChange={()=>this.q6_checkBoxTest(0)}
              />

              <Text>
                Practical
              </Text>

              <CheckBox
                value={this.state.q6_checked[1]}
                onChange={()=>this.q6_checkBoxTest(1)}
              />

              <Text>
                Friendly
              </Text>

              <CheckBox
                value={this.state.q6_checked[2]}
                onChange={()=>this.q6_checkBoxTest(2)}
              />
              
              <Text>
                Ambitious
              </Text>

              <CheckBox
                value={this.state.q6_checked[3]}
                onChange={()=>this.q6_checkBoxTest(3)}
              />
              
              <Text>
                Flexible
              </Text>

              <CheckBox
                value={this.state.q6_checked[4]}
                onChange={()=>this.q6_checkBoxTest(4)}
              />

              <Text>
                Organized
              </Text>
              
              <CheckBox
                value={this.state.q6_checked[5]}
                onChange={()=>this.q6_checkBoxTest(5)}
              />

              <Text>
                Generous
              </Text>

              <CheckBox
                value={this.state.q6_checked[6]}
                onChange={()=>this.q6_checkBoxTest(6)}
              />

              <Text>
                Self-Reliant
              </Text>

              <CheckBox
                value={this.state.q6_checked[7]}
                onChange={()=>this.q6_checkBoxTest(7)}
              />
              
              <Text>
                Calm
              </Text>

              <CheckBox
                value={this.state.q6_checked[8]}
                onChange={()=>this.q6_checkBoxTest(8)}
              />
              
              <Text>
                Hardworking
              </Text>

              <CheckBox
                value={this.state.q6_checked[9]}
                onChange={()=>this.q6_checkBoxTest(9)}
              />

              <Text>
                Open-Minded
              </Text>
              
              <CheckBox
                value={this.state.q6_checked[10]}
                onChange={()=>this.q6_checkBoxTest(10)}
              />

              <Text>
                Perceptive
              </Text>

              <CheckBox
                value={this.state.q6_checked[11]}
                onChange={()=>this.q6_checkBoxTest(11)}
              />

              <Text>
                Compassionate
              </Text>

              <CheckBox
                value={this.state.q6_checked[12]}
                onChange={()=>this.q6_checkBoxTest(12)}
              />
              
              <Text>
                Principled
              </Text>

              <CheckBox
                value={this.state.q6_checked[13]}
                onChange={()=>this.q6_checkBoxTest(13)}
              />
              
              <Text>
                Curious
              </Text>

              <CheckBox
                value={this.state.q6_checked[14]}
                onChange={()=>this.q6_checkBoxTest(14)}
              />

              <Text>
                Honest
              </Text>

              <CheckBox
                value={this.state.q6_checked[15]}
                onChange={()=>this.q6_checkBoxTest(15)}
              />

            </View>
          </Card>
          <Card title="Question 7">
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                What would you like in your Bio page?
              </Text>
              <Item floatingLabel>
                  <Label style={{padding: 5}}>Answer Here</Label>
                  <Input
                    autoCorrect={false}
                    onChangeText={(q7_description) => this.setState({ q7_description })}
                  />
              </Item>

            </View>
          </Card>
        </ScrollView>
        <Form>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.uploadQuizData(this.props.navigation.state.params.email,this.state)}
          >
            <Text style={{color:'white'}}>Submit Quiz</Text>
          </Button>
        </Form>
    </Container>
       
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});

export default QuizScreen2;
