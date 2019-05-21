import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createSwitchNavigator, createStackNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';


const test = StackNavigator({test: HomeScreen});
const AppStack = createStackNavigator({ HomeScreen: {screen: HomeScreen}});
const AuthStack = createStackNavigator({ 
    SignIn: LoginScreen, 
    Register: RegisterScreen 
},{
  initialRouteName: 'SignIn'
});

test.navigationOptions = {
  title: 'test'
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('loginToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(loginToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>loading ...</Text>
        <StatusBar barStyle="default"  hidden/>
      </View>
    );
  }
}

const Authrentication = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen, 
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default Authrentication;
AppRegistry.registerComponent('react-native-firebase-starter', () => AuthLoadingScreen);