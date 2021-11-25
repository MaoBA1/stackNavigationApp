import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './Screens/Categories';
import proudectScreen from './Screens/Products';
import proudectdetailsScreen from './Screens/productdetails';

const RonStackNavigator= createStackNavigator();

export const RonNav = () =>{
    return (
        <RonStackNavigator.Navigator>
            <RonStackNavigator.Screen name='Categories' component={CategoriesScreen}/>
            <RonStackNavigator.Screen name='Products' component={proudectScreen} />
            <RonStackNavigator.Screen name='Proudectdetails' component={proudectdetailsScreen} />
        </RonStackNavigator.Navigator>
    )
}