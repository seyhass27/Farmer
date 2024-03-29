import React, { Component } from 'react';
import { View, Text, Image, FlatList, Alert, TouchableOpacity, } from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer, 
    Card, CardItem, Thumbnail
} from 'native-base';
import CHeader from '../components/CHeader';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [
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
                name: 'sdftjj', 
                product_name : 'Banana',
                description: 'The cultivated rice plant, Oryza sativa, is an annual grass of the Gramineae family. It grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened, and its panicle, or inflorescence, is made up of spikelets bearing flowers that produce the fruit, or grain.', 
                img_url: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')},
                profile_url: {uri: require('../asset/img/profile-default-02.png')},
                price : '0.8$',
                amount : '40',
                sellerPhone : '089235575',
                address : 'Kandal',
            },
            { 
                id : 3,
                name: 'dsfsdgsdg', 
                product_name : 'Rice',
                description: 'dsfgsdfgsdfgsdfgsdfgsdfg', 
                img_url: {uri: require('../asset/img/rice-2-1.jpg')},
                profile_url: {uri: require('../asset/img/profile-default-02.png')},
                price : '1.7$/1 kilo',
                amount : '250',
                sellerPhone : '011235575',
                address : 'phnom penh',
            },
            { 
                id : 4,
                name: 'DUGIIVB', 
                product_name : 'Banana',
                description: 'dsfgsdfgsdfgsdfgsdfgsdfg', 
                img_url: {uri: require('../asset/img/banana_stem_rachis.jpg.838x0_q80.jpg')},
                profile_url: {uri: require('../asset/img/profile-default-02.png')},
                price : '1.3$',
                amount : '20',
                sellerPhone : '087235575',
                address : 'Takeo',
            },
            { 
                id : 5,
                name: 'KSDLFF', 
                product_name : 'Rice',
                description: 'klsdhgkjdhfglkhjdfl;ghsldfjghsjkdflghsdfghlksdfghs;dfghriujfhgrsiuflhgjrhslufhdlgsjklhdfjlgsrgsdfgsdfg', 
                img_url: {uri: require('../asset/img/rice-2-1.jpg')},
                profile_url: {uri: require('../asset/img/profile-default-02.png')},
                price : '1.25$/1 kilo',
                amount : '500',
                sellerPhone : '093235575',
                address : 'Siem Reab',
            }
        ]
    };
  }

  _renderItem = ({item}) => (
    <TouchableOpacity 
      activeOpacity={1}
      onPress={()=>{
          this.props.navigation.navigate('Detail', {
              itemId: 86,
              otherParam: 'anything you want here',
              username : item.name,
                product_name : item.product_name,
                description : item.description,
                profile_url : item.profile_url.uri,
                img_url : item.img_url.uri,
                price : item.price,
                amount: item.amount,
                phone: item.sellerPhone,
                address: item.address,
          })
      }}>
      <Card>
          <CardItem>
          <Left>
              <Thumbnail source={item.profile_url.uri} />
              <Body>
              <Text>{item.name}</Text>
              </Body>
          </Left>
          <Right>
              <Text>{item.price}</Text>
              <Text>{item.amount}</Text>
          </Right>
          </CardItem>
          <CardItem cardBody>
          {/* <Image source={{uri: 'http://www.berkeleywellness.com/sites/default/files/field/image/ThinkstockPhotos-512965900_field_img_hero_988_380.jpg'}} style={{height: 200, width: null, flex: 1}}/> */}
          <Image source={item.img_url.uri} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
          <Left>
              <Button transparent onPress={()=>{alert(item.img_url.uri)}}>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
              </Button>
          </Left>
          <Body>
              <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
              </Button>
          </Body>
          <Right>
              <Text>11h ago</Text>
              {/* <Text>{items[0].name}</Text> */}
          </Right>
          </CardItem>
      </Card>
    </TouchableOpacity>
    );

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'Farmer');

    return (
      <Container>
        <CHeader Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>
            }
            title = {title}/>
        <FlatList
            data = {this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem = {this._renderItem}
        />
      </Container>
    );
  }
}

export default ProductScreen;
