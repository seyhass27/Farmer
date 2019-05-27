import React from "react";
import { AppRegistry, Image, StatusBar, Alert } from "react-native";
import PostProductScreen from './PostProductScreen';
import { createStackNavigator, createAppContainer, createDrawerNavigator, withNavigation } from "react-navigation";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = [{
    route : 'App',
    title : 'Home',
    iconname : 'home'
  },{
    route : 'Profile',
    title : 'Profile',
    iconname : 'ios-contact'
  },{
    route : 'Post',
    title : 'Post Product',
    iconname : 'ios-add-circle-outline'
  },{
    route : 'Management',
    title : 'Post Management',
    iconname : 'ios-list'
  },{
    route : 'Contact',
    title : 'Contact',
    iconname : 'ios-contacts'
  },{
    route : 'Support',
    title : 'Supoort',
    iconname : 'ios-help-circle-outline'
  },
  // 'Logout' : {
  //   route : 'Logout',
  //   title : 'Logout',
  //   iconname : 'home'
  // },
];

const PostProduct = ({ navigation }) => (<PostProductScreen navigation={navigation}/>);

class SideBar extends React.Component {
  render() {
    //const {navigate} = this.props.navigation;
    const navigation = this.props.navigation ;
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 200,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 30
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 200 }}
            renderRow={data => {
              return (
                
                  <Button iconLeft transparent primary onPress={() => {
                    //alert(data.route)
                    alert(this.props.navogation)
                    //this.props.navigation.navigate(data.route)
                  }}>
                    <Icon name={data.iconname} />
                    <Text>{data.title}</Text>
                  </Button>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;