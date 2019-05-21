import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, ViewPagerAndroid, Image, FlatList, Alert, TouchableOpacity,
    TouchableHighlight 
} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer, 
    Card, CardItem, Thumbnail
} from 'native-base';
import ActionButton from 'react-native-action-button';
import Icons from 'react-native-vector-icons/Ionicons';
class FloatButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)" >
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {
                        console.log("notes tapped!");
                        this.props.navigation.navigate('Post')
                    }}>
                    <Icons name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {
                    this.props.navigation.navigate('Management')
                }}>
                    <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                    <Icon name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

export default FloatButton;