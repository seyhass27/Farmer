import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import HomeScreen from '../screen/HomeScreen';
import TopScreen from '../screen/TopScreen';
import CategoryScreen from '../screen/CategoryScreen';
import CityScreen from '../screen/CityScreen';
import CHeader from '../components/CHeader';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Home">
            <HomeScreen />
          </Tab>
          <Tab heading="Category">
            <CategoryScreen />
          </Tab>
          <Tab heading="City">
            <CityScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}