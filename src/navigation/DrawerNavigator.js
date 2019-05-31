import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer } from 'native-base';
import CHeader from '../components/CHeader';
import Sidebar from '../screen/SideBar';
import TabView from './TabView'
class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
                renderNavigationView={() => <Sidebar/>}>
                <Container>
                    <CHeader Left = {
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
                    title = 'Farmer'/>
                    <TabView />
                </Container>
            </DrawerLayoutAndroid>
                
            {/* </Drawer> */}
          
        </Container>
    );
  }
}

export default DrawerNavigator;
