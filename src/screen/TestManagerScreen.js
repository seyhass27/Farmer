import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TestScreen from './TestScreen';



class TestManagerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TestScreen/>
      </View>
    );
  }
}

export default TestManagerScreen;
