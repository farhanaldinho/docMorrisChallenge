import {SearchNavigatorParamList} from '@navigation/types'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import ProductDetailScreen from '../screens/ProductDetailScreen/ProductDetailScreen'
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen'

const SearchNativeStackNavigator = createNativeStackNavigator<SearchNavigatorParamList>()

export const SearchNavigator = (): JSX.Element => {
    return (
        <SearchNativeStackNavigator.Navigator
            screenOptions={(): object => ({
                animationTypeForReplace: 'push',
                animation: 'simple_push',
                initialRouteName: 'ProductListScreen',
                headerShown: false,
            })}
        >
            <SearchNativeStackNavigator.Screen name={'ProductListScreen'} component={ProductListScreen}/>
            <SearchNativeStackNavigator.Screen name={'ProductDetailScreen'} component={ProductDetailScreen}/>
        </SearchNativeStackNavigator.Navigator>
    )
}
