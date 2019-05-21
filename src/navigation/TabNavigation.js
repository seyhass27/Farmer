import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import TopScreen from '../screen/TopScreen';
import CategoryScreen from '../screen/CategoryScreen';
import CityScreen from '../screen/CityScreen';
import CHeader from '../components/CHeader';

const activeColor = '#2a7f40';

const TabNavigationManager = createMaterialTopTabNavigator({
    Home : {
        screen : HomeScreen,
        navigationOptions: () => ({
            title: 'New',
            headerBackTitle: null,
        }),
    },
    // Top : {
    //     screen : TopScreen,
    //     navigationOptions: () => ({
    //         title: 'Top',
    //         headerBackTitle: null
    //     }),
    // },
    Category : {
        screen : CategoryScreen,
        navigationOptions: () => ({
            title: 'Category',
            headerBackTitle: null
        }),
    },
    City : {
        screen : CityScreen,
        navigationOptions: () => ({
            title: 'City',
            headerBackTitle: null
        }),
    }
},{
    initialRouteName: 'Home',
    tabBarPosition: 'top',
    tabBarOptions:{
        pressColor : activeColor,
        // indicatorStyle: {
        //     height: '100%',
        //     backgroundColor: activeColor
        // }
        tabStyle : {
            backgroundColor: activeColor
        }
          
    }
    
});
const TabNavigation = createAppContainer(TabNavigationManager);

export default TabNavigation;
