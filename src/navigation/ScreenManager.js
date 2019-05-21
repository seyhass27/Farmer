import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import TabNavigation from '../navigation/TabNavigation';
import CHeader from '../components/CHeader';
import DetailScreen from '../screen/DetailProductScreen';
import { View, Text, Alert, DrawerLayoutAndroid } from 'react-native';
import { Button, Icon, Container, Drawer} from 'native-base';
import CategoryScreen from '../screen/CategoryScreen';
import CityScreen from '../screen/CityScreen';
import ProductScreen from '../screen/ProductScreen';
import SideBar from '../screen/SideBar';
import ProfileScreen from '../screen/ProfileScreen';
import PostProductScreen from '../screen/PostProductScreen';
import ProductManagementScreen from '../screen/ProductManagementScreen';
import ContactsScreen from '../screen/ContactsScreen';
import SupportScreen from '../screen/SupportScreen';


const openDrawer = () =>{
    this.drawer._root.open()
}
const closeDrawer = () => {
    this.drawer._root.close()
}
const ScreenController = createStackNavigator({
    App : { 
        screen : TabNavigation,
        navigationOptions: {
            header : 
            // null
            <CHeader Left = {
                <Button transparent
                onPress={()=>{
                    Alert.alert('Menu Pressed')
                    // this.refs['DRAWER_REF'].openDrawer();
                }}>
                    <Icon name='menu' />
                </Button>
            }
            title = 'Farmer'/>,
        }
    },
    Detail : { 
        screen : DetailScreen,
        navigationOptions: {
            header: null
            
        },
    },
    Products : {
        screen : ProductScreen,
        navigationOptions: {
            header : null,
        }
    },
    Drawer : {
        screen : SideBar,
        navigationOptions: {
            header : null,
        }
    },
    Profile : {
        screen : ProfileScreen,
        navigationOptions: {
            header : <CHeader Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>
            }
            title = 'Profile'/>,
        }
    },
    Post : {
        screen : PostProductScreen,
        navigationOptions: {
            header : null
        }
    },
    Management : {
        screen : ProductManagementScreen,
        navigationOptions: {
            header : null
        }
    },
    Contact : {
        screen : ContactsScreen,
        navigationOptions: {
            header : <CHeader Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>
            }
            title = 'Contacts'/>,
        }
    },
    Support : {
        screen : SupportScreen,
        navigationOptions: {
            header : <CHeader Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>
            }
            title = 'Support'/>,
        }
    },
},{

});

const ScreenManager = createAppContainer(ScreenController);



class ManagerScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    openDrawer(){
        this.drawer._root.open()
    }
    closeDrawer(){
        this.drawer._root.close()
    }
    render() {
      return (
        <Container>
            {/* <Drawer ref={(ref) => { this.drawer = ref; }} 
            content={<SideBar navigator={this.navigator} />} 
            onClose={() => this.closeDrawer()} > */}
            <DrawerLayoutAndroid
                ref={'DRAWER_REF'}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <SideBar/>}>
                <Container>
                    {/* <CHeader Left = {
                        <Button transparent
                        //ref={'mainHeader'}
                        ref={c => this.one = c}
                        onPress={()=>{
                            // Alert.alert('Menu Pressed')
                            this.refs['DRAWER_REF'].openDrawer();
                        }}>
                            <Icon name='menu' />
                        </Button>
                    }
                    title = 'Farmer'/> */}
                    <ScreenManager/>
                </Container>
            </DrawerLayoutAndroid>
                
            {/* </Drawer> */}
          
        </Container>
      );
    }
  }


export default ManagerScreen;