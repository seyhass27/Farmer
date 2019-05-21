import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScreenManager from './navigation/ScreenManager';
import TestScreen from './screen/TestScreen';
import TestManagerScreen from './screen/TestManagerScreen';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScreenManager/>
    );
  }
}

export default AppIndex;
