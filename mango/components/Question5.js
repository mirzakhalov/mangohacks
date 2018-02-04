import React, { Component } from 'react';
import { Text, View, StyleSheet, CheckBox} from 'react-native'; // 0.19.0

import "@expo/vector-icons"; // 6.2.2

export default class AssetExample extends Component {
  constructor(props){
    super(props)

    this.state = ({
      checked: [
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false
      ]
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
          Which of the following traits best describe your personality?
        </Text>

        <Text>
          Imaginative
        </Text>
        
        <CheckBox
          value={this.state.checked[0]}
          onChange={()=>this.checkBoxTest(0)}
        />

        <Text>
          Practical
        </Text>

        <CheckBox
          value={this.state.checked[1]}
          onChange={()=>this.checkBoxTest(1)}
        />

        <Text>
          Friendly
        </Text>

        <CheckBox
          value={this.state.checked[2]}
          onChange={()=>this.checkBoxTest(2)}
        />
        
        <Text>
          Ambitious
        </Text>

        <CheckBox
          value={this.state.checked[3]}
          onChange={()=>this.checkBoxTest(3)}
        />
        
        <Text>
          Flexible
        </Text>

        <CheckBox
          value={this.state.checked[4]}
          onChange={()=>this.checkBoxTest(4)}
        />

        <Text>
          Organized
        </Text>
        
        <CheckBox
          value={this.state.checked[5]}
          onChange={()=>this.checkBoxTest(5)}
        />

        <Text>
          Generous
        </Text>

        <CheckBox
          value={this.state.checked[6]}
          onChange={()=>this.checkBoxTest(6)}
        />

        <Text>
          Self-Reliant
        </Text>

        <CheckBox
          value={this.state.checked[7]}
          onChange={()=>this.checkBoxTest(7)}
        />
        
        <Text>
          Calm
        </Text>

        <CheckBox
          value={this.state.checked[8]}
          onChange={()=>this.checkBoxTest(8)}
        />
        
        <Text>
          Hardworking
        </Text>

        <CheckBox
          value={this.state.checked[9]}
          onChange={()=>this.checkBoxTest(9)}
        />

        <Text>
          Open-Minded
        </Text>
        
        <CheckBox
          value={this.state.checked[10]}
          onChange={()=>this.checkBoxTest(10)}
        />

        <Text>
          Perceptive
        </Text>

        <CheckBox
          value={this.state.checked[11]}
          onChange={()=>this.checkBoxTest(11)}
        />

        <Text>
          Compassionate
        </Text>

        <CheckBox
          value={this.state.checked[12]}
          onChange={()=>this.checkBoxTest(12)}
        />
        
        <Text>
          Principled
        </Text>

        <CheckBox
          value={this.state.checked[13]}
          onChange={()=>this.checkBoxTest(13)}
        />
        
        <Text>
          Curious
        </Text>

        <CheckBox
          value={this.state.checked[14]}
          onChange={()=>this.checkBoxTest(14)}
        />

        <Text>
          Honest
        </Text>

        <CheckBox
          value={this.state.checked[15]}
          onChange={()=>this.checkBoxTest(15)}
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