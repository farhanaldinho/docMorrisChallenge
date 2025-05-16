import AccountTabBarIconComponent from '@components/AccountTabBarIconComponent'
import {CartTabBarIconComponent} from '@components/cart'
import TabBarNavigatorIconLabelComponent from '@components/TabBarNavigatorIconLabelComponent'
import CartNavigator from '@navigation/CartNavigator'
import {SearchNavigator} from '@navigation/SearchNavigator'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Images from 'app/assets/images'
import {t} from 'i18next'
import {observer} from 'mobx-react'
import React from 'react'

import i18next from '../assets/locales/I18next/i18next'
import AppStore from '../store/AppStore'


const BottomTabNavigator = createBottomTabNavigator()

// eslint-disable-next-line max-lines-per-function
const tabNavigator = (): JSX.Element => {
    const DummyComponent = () => <></>

    i18next.language = AppStore.currentLanguage

    return (
        <BottomTabNavigator.Navigator initialRouteName={'SearchNavigator'}>
            <BottomTabNavigator.Screen
                name={'SearchNavigator'}
                component={SearchNavigator}
                options={{
                    tabBarLabel: t('search'),
                    tabBarIcon: (): JSX.Element => {
                        return <TabBarNavigatorIconLabelComponent icon={Images.icons.assortment}/>
                    },
                    headerShown: false,
                    tabBarAccessibilityLabel: 'SearchTab'
                }}
            />
            <BottomTabNavigator.Screen
                name={'CartNavigator'}
                component={CartNavigator}
                options={{
                    tabBarLabel: t('cart'),
                    tabBarIcon: (): JSX.Element => {
                        return <CartTabBarIconComponent/>
                    },
                    headerShown: false,
                    tabBarAccessibilityLabel: 'CartTab'
                }}
            />
            <BottomTabNavigator.Screen
                name={'OrdersNavigator'}
                component={DummyComponent}
                options={{
                    tabBarLabel: t('orders'),
                    tabBarIcon: (): JSX.Element => {
                        return <AccountTabBarIconComponent/>
                    },
                    headerShown: false,
                    tabBarAccessibilityLabel: 'OrdersTab'
                }}
            />
        </BottomTabNavigator.Navigator>
    )
}

const TabNavigator = observer(tabNavigator)
export {
    TabNavigator
}
