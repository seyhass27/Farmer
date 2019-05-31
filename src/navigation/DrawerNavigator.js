import React from 'react';
import { 
  StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView, FlatList, SectionList, 
  NavigatorIOS, TouchableHighlight, Dimensions, AppRegistry, StatusBar
} from 'react-native';
import { 
  createStackNavigator, createDrawerNavigator, createAppContainer 
} from 'react-navigation'; // Version can be specified in package.json
import TabBar from '../navigation/TabNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerContent from '../screen/SideBar';
import PostScreen from '../screen/PostProductScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SupportScreen from '../screen/SupportScreen';
import ManagementScreen from '../screen/ProductManagementScreen';
import ContactScreen from '../screen/ContactsScreen';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const color = '#ff1a1a';
const Tab = createStackNavigator({
    Tab: {screen: TabBar},
    
},{
    
})

const DrawerNavigation = createDrawerNavigator({
    Home: {screen : Tab,},
    Profile: {screen : ProfileScreen},
    Post: {screen : PostScreen},
    Management: {screen : ManagementScreen},
    Contact: {screen : ContactScreen},
    Support: {screen : SupportScreen},
  },{
    initialRouteName: 'Home',
    contentComponent: DrawerContent,
    
})
const DrawerView = createAppContainer(DrawerNavigation);
export default class DrawerNavigations extends React.Component{
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        const header_title = navigation.getParam('header_title', 'Farmer');
        
        return {
            headerStyle: {
                backgroundColor: color
            },
            // headerRight: (
            //     <View style={{flexDirection: 'column'}}>
            //         <View style={{flexDirection: 'row'}}>
            //             <View style={{flex: 1,}}>
            //                 <Icon.Button name="ios-heart" color="#fff" backgroundColor={color} 
            //                     size={20} 
            //                     //onPress={() => navigation.setParams({ header_title: 'Updated!' })}
            //                     onPress={() => alert('Added to Favorite')}
            //                 >
            //                 </Icon.Button>
            //             </View>
            //             <View style={{flex: 1,}}>
            //                 <Icon.Button name="ios-cart" color="#fff" backgroundColor={color} 
            //                     style={{marginLeft: 'auto', marginRight: 'auto'}}
            //                     size={20} 
            //                     //onPress={() => this.searchHeader.show()}
            //                     onPress={() => navigation.navigate('Cart')}
            //                 >
            //                 </Icon.Button>
            //             </View>
            //         </View>
                    
            //     </View>
            // ),
            headerLeft: (
                <TouchableHighlight onPress={() => {this.props.navigation.toggleDrawer();}}>
                    <View style={{flexDirection: 'row'}}>
                        
                        <View style={{marginTop: 15}}>
                            
                        </View>
                        <View>
                            <Icon.Button name="ios-menu" color="#fff" backgroundColor={color} size={20}
                            onPress={() => {navigation.toggleDrawer();}}>
                            </Icon.Button>
                        </View>
                    </View>
                </TouchableHighlight>
            ), 
            headerTitle:({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let headerTitle = <Text style={{fontSize: 16, color: '#fff', marginLeft: 'auto', marginRight: 'auto'}}>
                        {navigation.getParam('header_title', 'Farmer')}
                    </Text>
                //console.log(navigation.state);
                return <View style={{width: '100%', flexDirection: 'row'}}>
                    <View style={{flex: 10}}>
                        <Text style={{fontSize: 16, color: '#fff', marginLeft: 'auto', marginRight: 'auto'}}>
                            {navigation.getParam('header_title', 'Farmer')}
                        </Text>
                    </View>
                    <View style={{flex: 1}}></View>
                </View>;
            },
        };
    };
    
    static router = DrawerView.router;
    render(){
        return <DrawerView navigation={this.props.navigation}/>
    }
}