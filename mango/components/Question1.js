import React, { Component } from 'react';
import { Text, View, StyleSheet, CheckBox} from 'react-native'; // 0.19.0

import "@expo/vector-icons"; // 6.2.2

export default class Question1 extends Component {
  constructor(props){
    super(props)

    this.state = ({
      checked: [false,false,false,false,false,false]
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
          What are you looking for in a mentor?
        </Text>
        <Text>
          Career guidance
        </Text>
        <CheckBox
          value={this.state.checked[0]}
          onChange={()=>this.checkBoxTest(0)}
        />

        <Text>
          Compassion
        </Text>
        <CheckBox
          value={this.state.checked[1]}
          onChange={()=>this.checkBoxTest(1)}
        />

        <Text>
          General life advice
        </Text>
        <CheckBox
          value={this.state.checked[2]}
          onChange={()=>this.checkBoxTest(2)}
        />


        <Text>
          Emotional support
        </Text>
        <CheckBox
          value={this.state.checked[3]}
          onChange={()=>this.checkBoxTest(3)}
        />


        <Text>
          Academic advice
        </Text>
        <CheckBox
          value={this.state.checked[4]}
          onChange={()=>this.checkBoxTest(4)}
        />

        
        <Text>
          Health advice
        </Text>
        <CheckBox
          value={this.state.checked[5]}
          onChange={()=>this.checkBoxTest(5)}
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