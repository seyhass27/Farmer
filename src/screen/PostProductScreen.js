import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import CHeader from '../components/CHeader';
import { 
  Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title, 
  Content, 
  Thumbnail,
  Item, 
  Input,
  Textarea, Form 
} from 'native-base';
import firebase from 'firebase';
import { addItem } from '../utils/service/productService';

class PostProductScreen extends Component {
  constructor(props) {
    super(props);
    // console.ignoredYellowBox = [
    //   'Setting a timer'
    // ];
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    this.state = {
      addedImg : false,
      timer: null,
      product_name : '',
      pamount: 0,
      pprice: 0,
      pphone: null,
      uaddress: '',
      pdescription: ''
      
    }; 
    this._insertData = this._insertData.bind(this);
    this.productNameChange = this.productNameChange.bind(this);
    this.productQuantityChange = this.productQuantityChange.bind(this);
    this.productPriceChange = this.productPriceChange.bind(this);
    this.productPhoneChange = this.productPhoneChange.bind(this);
    this.productAddressChange = this.productAddressChange.bind(this);
    this.productDescriptionChange = this.productDescriptionChange.bind(this);
  }

  componentWillMount() {

    firebase.database().ref('/').on('value', (data)=>{
      //const test = data.toJSON();
      //alert(data.numChildren())
      // global.data = data.toJSON();
      // alert(test[0].product_name);
    })
    //console.log(firebase)
  }

  productNameChange(productName){
    this.setState({product_name : productName});
  }

  productQuantityChange(pQuantity){
    this.setState({pamount: pQuantity})
  }

  productPriceChange(price){
    this.setState({pprice: price})
  }

  productPhoneChange(phone){
    this.setState({pphone: phone})
  }

  productAddressChange(address){
    this.setState({uaddress: address})
  }

  productDescriptionChange(desc){
    this.setState({pdescription: desc})
  }

  _insertData(){
    var dataLenght = 0;
    firebase.database().ref('/').on("value", (dataSet)=>{
      //alert(dataSet.numChildren())
      dataLenght = dataSet.numChildren()
      // alert(dataLenght)
      
    })
    const id = 0;
    setTimeout(() => {
      firebase.database().ref('/' + dataLenght).set(
        {

          address : "Phnom Penh",
          amount : 150,
          phone : "093291068",
          price : 0.7,
          type: 'rice',
          product_images : {
            main_image : {
              "uri" : "https://firebasesto...-acbf-565e24ca637b"
            },
            other_image : {
              "uri" : "gs://farmer-6a64a.appspot.com/rice-2-1.jpg"
            }
          },
          product_name : "Product A",
          user_profile_image : "gs://farmer-6a64a.appspot.com/profile-default-02.png",
          username : "User H"
        }
      ).then(() => {
          alert('INSERTED !');
      }).catch((error) => {
          alert(error);
      });

    }, 0);


  }

  render() {
    return (
      <Container>
          <CHeader Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>
            } title = 'Post Product'/>
            <Content>
              {!this.state.addedImg ? 
              <View style={{
                backgroundColor: '#2a7f40',
                height: 250
              }}>
                {/* Not */}
                <TouchableOpacity style={{
                  alignSelf: 'center',
                  marginBottom: 'auto',
                  marginTop:'auto',
                }}>
                  <View style={{
                    width : 50,
                    height : 50,
                    borderRadius: 25,
                    backgroundColor: '#7b7d7f',
                    
                  }}>
                    <Icon name='ios-add' style={{
                      color: 'white', 
                      fontSize : 26,
                      alignSelf: 'center',
                      marginBottom: 'auto',
                      marginTop:'auto',
                  }}/>
                  </View>
                </TouchableOpacity>
                {/* <Thumbnail small 
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png'}} 
                style={{
                  alignSelf: 'center',
                  marginBottom: 'auto',
                  marginTop:'auto',
                  backgroundColor: '#fff'
                }}/> */}
              </View>
              :
              <View>
                <Text>Added</Text>
              </View>}
              {/* Input */}
              <Form>
                <Item>
                  <Input placeholder="Product Name" 
                  ref= {(pName) => { this.product_name = pName; }}
                  onChangeText={(text) => this.setState({product_name: text})}/>
                </Item>
                <Item>
                  <Input placeholder="Quantity" 
                  ref= {(pQuantity) => { this.pQuantity = pQuantity; }}
                  onChange={this.productQuantityChange} />
                </Item>
                <Item>
                  <Input placeholder="Price" 
                  ref= {(pPrice) => { this.pPrice = pPrice; }}
                  onChange={this.productPriceChange} />
                </Item>
                <Item>
                  <Input placeholder="Phone Number" 
                  ref= {(pPhone) => { this.pPhone = pPhone; }}
                  onChange={this.productPhoneChange} />
                </Item>
                <Item>
                  <Input placeholder="Address" 
                  ref= {(pAddress) => { this.Address = pAddress; }}
                  onChange={this.productAddressChange} />
                </Item>
                <Text style={{
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  fontSize: 18
                }}>Description : </Text>
                <Textarea rowSpan={3} bordered placeholder="Description" 
                  ref= {(pDescription) => { this.Description = pDescription; }}
                  onChange={this.productDescriptionChange} />
                <Button style={{
                  backgroundColor: '#2a7f40',
                  padding: 50,
                  alignSelf: 'center',
                  marginTop: 10,
                  marginBottom : 30
                }}
                onPress={this._insertData}
                // onPress={()=>{
                //     const product = this.state;
                //     const message = product.product_name + '\n' + product.pamount + '\n' + 
                //       product.pprice + '\n' + product.pphone + '\n' + product.uaddress + '\n' + 
                //       product.pdescription;
                //     alert(product.message)
                //   }
                // }
                >
                  <Text style={{
                    fontSize: 18,
                    color: '#fff'
                  }}>Post</Text>
                </Button>
              </Form>
              
            </Content>
      </Container>
    );
  }
}

export default PostProductScreen;
