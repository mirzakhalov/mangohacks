import React, { Component } from 'react';
import { Text, View, StyleSheet, CheckBox} from 'react-native'; // 0.19.0

import "@expo/vector-icons"; // 6.2.2

export default class Question2 extends Component {
  constructor(props){
    super(props)

    this.state = ({
      checked: [false,false,false]
    })

  }
  
  checkBoxTest(i){
    pre_checked = this.state.checked
    pre_checked[i] = !pre_checked[i]
    this.setState({
      checked:pre_checked
    })
    console.log(this.state.checked)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          What skills would you like to share?
        </Text>
          <Text>
            Technology
          </Text>
          
          <CheckBox
            value={this.state.checked[0]}
            onChange={()=>this.checkBoxTest(0)}
          />

          <Text>
            Contemporary culture
          </Text>
          <CheckBox
            value={this.state.checked[1]}
            onChange={()=>this.checkBoxTest(1)}
          />

          <Text>
            Personal interests and/or hobbies
          </Text>
          <CheckBox
            value={this.state.checked[2]}
            onChange={()=>this.checkBoxTest(2)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});