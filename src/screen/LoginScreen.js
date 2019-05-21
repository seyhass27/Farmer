import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image , 
  TouchableHighlight, 
  Alert,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} 
from 'react-native';
import styles from '../assets/styles/loginScreenStyles';
import CButton from '../components/LoginComponent/CenterButton';
import SwitchView from '../components/LoginComponent/SwitchButton';
import I18n from 'react-native-i18n';
//import LocalizedStrings from 'react-native-localization';
import RegisterScreen from './registerScreen';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';
//I18n.locale = "en";
I18n.translations = {
  'en': {
    'Login': 'Login',
    'Register': 'Register',
    'language': 'English',
    'choose': 'Choose Your Language'
  },
  'km': {
    'Login': 'ចូល',
    'Register': 'ចុះឈ្មោះ',
    'language': 'ភាសាខ្មែរ',
    'choose': 'ជ្រើសរើសភាសា'
  },
};



class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 'km',
      token: null
    };
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    I18n.locale = this.state.local;
    //const {..., currentLanguage, toggleLanguage} = this.props;
    //console.warn(I18n.translations);

    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.login_container}>
          <View style={styles.logo_container}>
            <Image source={require('../assets/icons/icon.png')} style={[styles.logo,]}/>
          </View>
          <View style={styles.content_container}>
            <CButton title={I18n.t('Register')} 
              style={styles.register_button_container}
              ButtonPress={()=>{Alert.alert(I18n.t('Register'))}}/>
            <CButton title={I18n.t('Login')} 
              style={[styles.register_button_container, {marginTop: 15,}]}
              ButtonPress={()=>{
                Alert.alert(I18n.t('Login'))}
                
              }/>
            {/* Language Button switch */}
            <Text style={styles.txt_choose_language}>{I18n.t('choose')}</Text>
            
            <SwitchView style={styles.switch_button_language_container}
            buttonKhmerPress= {()=> {this.setState({local: 'km'})}}
            buttonEnglishPress = {() => {this.setState({local: 'en'})}}/>
            
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
