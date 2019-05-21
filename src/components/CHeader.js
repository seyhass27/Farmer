import React, { Component } from 'react';
import { View, Text, StyleSheet, ViewPagerAndroid, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer } from 'native-base';

// create a component
class MyClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: this.props.layout
        };
    }

    _layoutPressed = () =>{
        if(this.state.layout == 'grid'){
            this.setState({layout: 'list'})
        }else{
            this.setState({layout: 'grid'})
        }
        Alert.alert(this.state.layout);
        //this.setState()
    }
    render() {
        return (
            <View>
                <Header 
                style = {{backgroundColor: '#2a7f40'}}
                androidStatusBarColor = '#2a7f40'>
                    <Left>
                        {this.props.Left}
                        {/* <Button transparent
                        onPress={()=>{Alert.alert('Menu Pressed')}}>
                            <Icon name='menu' />
                        </Button> */}
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                </Header>
            </View>
        );
    }
}


//make this component available to the app
export default MyClass;
