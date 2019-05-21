import React, { Component } from 'react';
import { View, Text, Alert , TouchableHighlight} from 'react-native';
import styles from '../../assets/styles/loginScreenStyles';

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={this.props.style}>
                <View style={{ flex: 1 }}></View>
                <View style={styles.register_button}>
                    <TouchableHighlight onPress={this.props.ButtonPress} 
                        style={{width: '100%', height: '100%'}}>
                        <Text style={[styles.center, styles.register_button_content]}>
                            {this.props.title}
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        );
    }
}

export default CustomButton;
