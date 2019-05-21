import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
    Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body 
} from 'native-base';

const CustomRow = ({ user_name, description, image_url, profile_url, price, amount })=>{
    //   <Container>
    //     <Card>
    //         <CardItem>
    //         <Left>
    //             <Thumbnail source={{uri: profile_url}} />
    //             <Body>
    //             <Text>{user_name}</Text>
    //             <Text note>{description}</Text>
    //             </Body>
    //         </Left>
    //         <Right>
    //             <Text>{price}</Text>
    //             <Text>{amount}</Text>
    //         </Right>
    //         </CardItem>
    //         <CardItem cardBody>
    //         <Image source={{uri: profile_url}} style={{height: 200, width: null, flex: 1}}/>
    //         </CardItem>
    //         <CardItem>
    //         <Left>
    //             <Button transparent>
    //             <Icon active name="thumbs-up" />
    //             <Text>12 Likes</Text>
    //             </Button>
    //         </Left>
    //         <Body>
    //             <Button transparent>
    //             <Icon active name="chatbubbles" />
    //             <Text>4 Comments</Text>
    //             </Button>
    //         </Body>
    //         <Right>
    //             <Text>11h ago</Text>
    //         </Right>
    //         </CardItem>
    //     </Card>
    //   </Container>
}

export default CustomRow;
