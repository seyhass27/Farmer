import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer } from 'native-base';
import CHeader from '../components/CHeader';

class SupportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <CHeader 
            Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>} 
            title = 'Support'/>
        <Text> Support Screen </Text>
      </View>
    );
  }
}

export default SupportScreen;
