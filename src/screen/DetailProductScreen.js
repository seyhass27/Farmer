

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from '../asset/styles/DetailProductStyles';
import CHeader from '../components/CHeader';
import { Button, Icon} from 'native-base';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { sliderWidth, itemWidth } from '../asset/styles/sliderEntry.style';
import SliderEntry from '../components/SliderEntry';

const defaultProfileImg = require('../asset/img/profile-default-02.png')
const defaultImg = require('../asset/img/profile-default-02.png')

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

class Talks extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        ''
      ]),
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem ({item, index}, parallaxProps) {
    return (
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: item.thumbnail }}
                containerStyle={styles.imageContainer}
                style={styles.images}
                parallaxFactor={0.4}
            />
            <Text style={styles.title} numberOfLines={2}>
                { item.title }
            </Text>
        </View>
    );
  }

  _renderItemCarousel ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  mainCarousel (number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
        <View style={styles.carouselContainer}>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
            
        </View>
    );
  }

  _renderDetailtProduct (seller, phone, amount, price, address){
    return (
      <View>
        <View style={{flexDirection: 'row', padding : 10}}>
          <Text style = {{flex: 2, fontSize: 20 }}>Seller : </Text>
          <Text style={{flex: 5, fontSize : 20}}>{seller}</Text>
        </View>
        <View style={{flexDirection: 'row', padding : 10}}>
          <Text style = {{flex: 2, fontSize: 20 }}>Phone : </Text>
          <Text style={{flex: 5, fontSize : 20}}>{phone}</Text>
        </View>
        <View style={{flexDirection: 'row', padding : 10}}>
          <Text style = {{flex: 2, fontSize: 20 }}>Quantity : </Text>
          <Text style={{flex: 5, fontSize : 20}}>{amount}</Text>
        </View>
        <View style={{flexDirection: 'row', padding : 10}}>
          <Text style = {{flex: 2, fontSize: 20 }}>Price : </Text>
          <Text style={{flex: 5, fontSize : 20}}>{price}</Text>
        </View>
        <View style={{flexDirection: 'row', padding : 10}}>
          <Text style = {{flex: 2, fontSize: 20 }}>Address : </Text>
          <Text style={{flex: 5, fontSize : 20}}>{address}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { onScroll = () => {} } = this.props;
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const username = navigation.getParam('username', 'Username');
    const productName = navigation.getParam('product_name', 'Product Name');
    const sellerPhone = navigation.getParam('phone', 'none');
    const sellerAddress = navigation.getParam('address', ' address');
    const description = navigation.getParam('description', 'Description');
    const profile_url = navigation.getParam('profile_url', 'Profile Image');
    const img_url = navigation.getParam('img_url', 'Product Image');
    const price = navigation.getParam('price', '0');
    const productAmount = navigation.getParam('amount', '0');
    const Carousel = this.mainCarousel(1, 'Default layout | Parallax | Scale | Opacity');

    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        enableEmptySections
        renderRow={() => (
          <View>
            {this._renderDetailtProduct(username, sellerPhone, productAmount, price, sellerAddress)}
            
            {Carousel}

            <View>
              <Text style={{fontSize: 16, padding: 10}}>
                {description}
              </Text>
            </View>
          </View>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            backgroundColor='#fff'
            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT - 12 }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View style={{backgroundColor: '#fff', borderBottomWidth: 0.5}}>
                <Image source={img_url} style={{height: PARALLAX_HEADER_HEIGHT }}/>
                {/* <View style={{position: 'absolute',
                  top: 0,
                  width: window.width,
                  backgroundColor: 'rgba(0,0,0,.4)',
                  height: PARALLAX_HEADER_HEIGHT}}/> */}
                  <View style={styles.productNameContainer}>
                    <Text style={ styles.productName }>
                      {productName}
                    </Text>
                  </View>
              </View>
            )}

            // renderForeground={() => (
            //   <View key="parallax-header" style={ styles.parallaxHeader }>
                
                
            //   </View>
            // )}

            renderStickyHeader={() => (
              // <View  style={styles.stickySection}>
                <CHeader title = {productName + ''} Left= {
                  <Button transparent
                  onPress={()=>{
                      this.props.navigation.goBack()
                  }}
                  style={{width: '100%',}}>
                      <Icon name='ios-arrow-back' />
                  </Button>
                }/>
                // {/* <Text style={styles.stickySectionText}
                // onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                //   {productName}
                // </Text> */}
              // </View>
            )}

            // renderFixedHeader={() => (
            //   <View key="fixed-header" style={styles.fixedSection}>
            //     <Text style={styles.fixedSectionText}
            //           onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
            //       Scroll to top
            //     </Text>
            //   </View>
            // )}
            />
        )}
      />
    );
  }
}

export default Talks;