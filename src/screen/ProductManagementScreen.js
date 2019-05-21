import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import CHeader from '../components/CHeader';
import { 
  Container, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon
} from 'native-base';
import styles from '../asset/styles/ManageProductsStyle';

class ProductManagementScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hadLoged: false,
      haveProducts: true,
      products : [
        {
          id : 1,
          name: 'TURQUOISE', 
          product_name : 'Rice',
          description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
          img_url: {uri: require('../asset/img/rice-2-1.jpg')},
          profile_url: {uri: require('../asset/img/profile-default-02.png')},
          price : '1.2$/1 kilo',
          amount : '200',
          sellerPhone : '012235575',
          address : 'phnom penh',
        },
        {
          id : 2,
          name: 'TURQUOISE', 
          product_name : 'Rice',
          description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
          img_url: {uri: require('../asset/img/rice-2-1.jpg')},
          profile_url: {uri: require('../asset/img/profile-default-02.png')},
          price : '1.2$/1 kilo',
          amount : '200',
          sellerPhone : '012235575',
          address : 'phnom penh',
        },
        {
          id : 3,
          name: 'TURQUOISE', 
          product_name : 'Rice',
          description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
          img_url: {uri: require('../asset/img/rice-2-1.jpg')},
          profile_url: {uri: require('../asset/img/profile-default-02.png')},
          price : '1.2$/1 kilo',
          amount : '200',
          sellerPhone : '012235575',
          address : 'phnom penh',
        },{
          id : 4,
          name: 'TURQUOISE', 
          product_name : 'Rice',
          description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
          img_url: {uri: require('../asset/img/rice-2-1.jpg')},
          profile_url: {uri: require('../asset/img/profile-default-02.png')},
          price : '1.2$/1 kilo',
          amount : '200',
          sellerPhone : '012235575',
          address : 'phnom penh',
        },{
          id : 5,
          name: 'TURQUOISE', 
          product_name : 'Rice',
          description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
          img_url: {uri: require('../asset/img/rice-2-1.jpg')},
          profile_url: {uri: require('../asset/img/profile-default-02.png')},
          price : '1.2$/1 kilo',
          amount : '200',
          sellerPhone : '012235575',
          address : 'phnom penh',
        },{
          id : 6,
          name: 'TURQUOISE', 
          product_name : 'Rice',
          description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
          img_url: {uri: require('../asset/img/rice-2-1.jpg')},
          profile_url: {uri: require('../asset/img/profile-default-02.png')},
          price : '1.2$/1 kilo',
          amount : '200',
          sellerPhone : '012235575',
          address : 'phnom penh',
        }
      ]
    };
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    // <List>
    // <View style={{
    //   padding: 10,
    //   borderWidth: 1
    // }}>
    <Content style={{
      padding: 10,
      borderBottomWidth: 1,
      width: '100%'
    }}>
      <View style={{
        flexDirection:'row',
        width: '100%'
      }}>
        {/* <Left>
          <Image style={{width: 50, height: 50}} source={item.img_url.uri}/>
        </Left>
        <Right>
          <Text>{item.product_name}</Text>
        </Right> */}
        <View style={{
          // borderWidth: 1,
          width: 90
        }}>
          <Thumbnail square large source={item.img_url.uri} />
        </View>
        <Body style={{
          // borderWidth: 1,
          flex: 3
        }}>
          <Text style={styles.itemName}>{item.product_name}</Text>
          <Text note numberOfLines={1} style={styles.itemDetailt}>Amount : {item.amount}</Text>
          <Text note numberOfLines={1} style={styles.itemDetailt}>Price : {item.price}</Text>
          <Text note numberOfLines={1} style={styles.itemDetailt}>Address : {item.address}</Text>
        </Body>
        <Right style={{
          borderWidth: 1,
          flex: 1
        }}>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </View>
      
    </Content>
    // </View>
  );

  render() {
    return (
      <Container>
        <CHeader 
          Left = {
            <Button transparent
            onPress={()=>{this.props.navigation.goBack()}}>
                <Icon name='ios-arrow-back' />
            </Button>} 
          title = 'Product Management'/>
          <View>
          {!this.state.hadLoged ? 
              <View style={{
                backgroundColor: '#2a7f40',
                height: 200
              }}>
                {/* Not */}
                
                <Thumbnail large 
                source={require('../asset/img/profile-default-02.png')} 
                style={{
                  alignSelf: 'center',
                  marginBottom: 'auto',
                  marginTop:'auto',
                  backgroundColor: '#fff',
                }}/>
                <Text style={{
                  fontSize: 20,
                  alignSelf:'center',
                  marginBottom : 40
                }}>Username</Text>
              </View>
              :
              <View>
                <Text>Added</Text>
              </View>}
          </View>
          {!this.state.haveProducts ? <View style={{flex: 1, borderBottomWidth: 1}}>
            <Text style={{
              alignSelf: 'center',
              marginBottom: 'auto',
              marginTop:'auto',
              fontSize: 30
            }}>Empty</Text>
          </View>:<View style={{
            flex: 1
          }}>
            {/* <Text onPress={()=>{alert(this.state.products)}}>Have Products</Text> */}
            <FlatList
                data = {this.state.products}
                keyExtractor={this._keyExtractor}
                renderItem = {this._renderItem}
            />
            
            {/* <List dataArray= {this.state.products}
            renderRow={this._renderItem(this.state.products)}/> */}

          </View>}
      </Container>
    );
  }
}

export default ProductManagementScreen;
