import React, { Component } from 'react';
import { 
  View, Text, TouchableOpacity, Alert, DrawerLayoutAndroid, ImageBackground
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Container, Icon} from 'native-base';
import styles from '../asset/styles/CityScreenStyles';
import ProductScreen from './ProductScreen';
import ActionButton from 'react-native-action-button';
import Icons from 'react-native-vector-icons/Ionicons';

const items = [
  { name: 'TURQUOISE', code: '#1abc9c', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}}, 
  { name: 'EMERALD', code: '#2ecc71', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} },
  { name: 'PETER RIVER', code: '#3498db', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} }, 
  { name: 'AMETHYST', code: '#9b59b6', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} },
  { name: 'WET ASPHALT', code: '#34495e', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} }, 
  { name: 'GREEN SEA', code: '#16a085', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} },
  { name: 'NEPHRITIS', code: '#27ae60', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} }, 
  { name: 'BELIZE HOLE', code: '#2980b9', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} },
  { name: 'WISTERIA', code: '#8e44ad', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} }, 
  { name: 'MIDNIGHT BLUE', code: '#2c3e50', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')} },
  { name: 'SUN FLOWER', code: '#f1c40f', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}}, 
  { name: 'CARROT', code: '#e67e22', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}},
  { name: 'ALIZARIN', code: '#e74c3c', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}}, 
  { name: 'CLOUDS', code: '#ecf0f1', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}},
  { name: 'CONCRETE', code: '#95a5a6', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}}, 
  { name: 'ORANGE', code: '#f39c12', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}},
  { name: 'PUMPKIN', code: '#d35400', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}}, 
  { name: 'POMEGRANATE', code: '#c0392b', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}},
  { name: 'SILVER', code: '#bdc3c7', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}}, 
  { name: 'ASBESTOS', code: '#7f8c8d', img: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')}},
];

class CityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>

        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={()=> {
              this.props.navigation.navigate('Products', {
                title: item.name,
              })
            }}>
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <ImageBackground source={item.img.uri} style={{
                  width: '100%',
                  height: '100%'
                }}>
                  <View style={{
                    position:'absolute',
                    bottom: 0,
                    height: 30,
                    width: '100%',
                    backgroundColor: 'rgba(42, 127, 64, 0.5)'
                  }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </View>
                  {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)" >
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {
                    console.log("notes tapped!");
                    this.props.navigation.navigate('Post')
                }}>
                <Icons name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            {/* <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item> */}
            <ActionButton.Item buttonColor='#1abc9c' title="Products Management" onPress={() => {
                this.props.navigation.navigate('Management')
            }}>
                <Icon name="md-clipboard" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton> 
      </Container>
    );
  }
  // _itemPressed(){
  //   //alert("pressed");
  //   this.props.navigation.navigate('Products', {
  //     itemId: item.name,
  //   })
  // }
}

export default CityScreen;
