import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import styles from '../../assets/styles/loginScreenStyles';

class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active : this.props.active
    };
  }

  render() {
    return (
      <View style={this.props.style}>
        <View style={{ flex: 2 }}></View>
        <View style={styles.switch_button}>
            <TouchableHighlight onPress={this.props.buttonKhmerPress} 
                style={{width: '100%', height: '100%'}}>
                <Text style={[styles.center, styles.language_text]}>
                    ភាសាខ្មែរ
                </Text>
            </TouchableHighlight>
        </View>
        <View style={{flex: 0.5}}></View>
        <View style={styles.switch_button}>
            <TouchableHighlight onPress={this.props.buttonEnglishPress} 
                style={{width: '100%', height: '100%'}}>
                <Text style={[styles.center, styles.language_text]}>
                    English
                </Text>
            </TouchableHighlight>
        </View>
        <View style={{ flex: 2 }}></View>
      </View>
    );
  }
}

export default SwitchButton;
