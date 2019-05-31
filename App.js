/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import AppIndex from './src/index';
import firebase from 'firebase';
// import console = require('console');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//const data = firebase.database().ref('')

export default class App extends Component {

  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    this.state = {
    };
  }

  componentWillMount() {

    

    // // Your web app's Firebase configuration
    // var firebaseConfig = {
    //   apiKey: "AIzaSyDkQuw1U7gMx7o8GhIhJOpUw4nE6eHP0Zs",
    //   authDomain: "farmer-6a64a.firebaseapp.com",
    //   databaseURL: "https://farmer-6a64a.firebaseio.com",
    //   projectId: "farmer-6a64a",
    //   storageBucket: "farmer-6a64a.appspot.com",
    //   messagingSenderId: "348717835238",
    //   appId: "1:348717835238:web:79982ef486f528d1"
    // };
    // global.test2 = {'test':[
    //   {
    //     'name': 'test 2'
    //   }
    // ]}
  
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    
    // firebase.database().ref('/').on('value', (data)=>{
    //   const test = data.toJSON();
    //   global.productData = data.toJSON();
    //   // alert(global.productData)
    //   //alert(global.data[0].Product1.product_images.main_image.uri);
    // })
    // //console.log(firebase)
  }

  render() {
    return (
      <AppIndex/>
    );
  }
}
