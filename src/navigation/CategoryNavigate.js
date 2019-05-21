import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const CategoryRoute = createStackNavigator({
    Category : { 
        screen : TabNavigation,
        navigationOptions: {
            header : <CHeader Left = {
                <Button transparent
                onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='ios-arrow-back' />
                </Button>
            }
            title = 'Products'/>
        }
    },
    Detail : { 
        screen : DetailScreen,
        navigationOptions: {
            header: null
            
        },
    }
},{

});

const CategoryRouteManager = createAppContainer(CategoryRoute);

export default CategoryRouteManager;
