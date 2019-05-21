import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

class PostProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedImg : false,
    };
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
                  <Input placeholder="Product Name" />
                </Item>
                <Item>
                  <Input placeholder="Quantity" />
                </Item>
                <Item>
                  <Input placeholder="Price" />
                </Item>
                <Item>
                  <Input placeholder="Phone Number" />
                </Item>
                <Item>
                  <Input placeholder="Address" />
                </Item>
                <Text style={{
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  fontSize: 18
                }}>Description : </Text>
                <Textarea rowSpan={3} bordered placeholder="Description" />
                <Button style={{
                  backgroundColor: '#2a7f40',
                  padding: 50,
                  alignSelf: 'center',
                  marginTop: 10,
                  marginBottom : 30
                }}>
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
