import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Root from './ScreenManager';

class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Root/>
      </View>
    );
  }
}

export default DrawerScreen;
