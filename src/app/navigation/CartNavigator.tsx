import {CartNavigatorParamList} from '@navigation/types'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {t} from 'i18next'
import React from 'react'

import CartScreen from '../screens/CartScreen/CartScreen'

const CartNativeStackNavigator = createNativeStackNavigator<CartNavigatorParamList>()

const CartNavigator = (): JSX.Element => {
    return (
        <CartNativeStackNavigator.Navigator
            screenOptions={(): object => ({
                animationTypeForReplace: 'push',
                animation: 'simple_push',
                initialRouteName: 'CartScreen',
                headerShown: true,
                headerTitle: t('cart'),
            })}
        >
            <CartNativeStackNavigator.Screen name={'CartScreen'} component={CartScreen}/>
        </CartNativeStackNavigator.Navigator>
    )
}

export default CartNavigator
