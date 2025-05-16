import CartList from '@components/cart/cartList/CartList'
import {ScreenNavigationProp, ScreenParamList, ScreenRouteProp} from '@navigation/types'
import {t} from 'i18next'
import uniqBy from 'lodash.uniqby'
import {observer} from 'mobx-react'
import React from 'react'
import {SafeAreaView} from 'react-native'

import Screen from '../Screen'
import styles from './styles'

export type CartScreenParamList = ScreenParamList<'CartScreen'>

interface CartScreenProps {
    navigation: ScreenNavigationProp<CartScreenParamList>
    route: ScreenRouteProp<CartScreenParamList>
}

class CartScreen extends Screen {
    constructor(props: CartScreenProps) {
        super(props)
    }

    get cartSectionList() {
        const uniqueCartItemsWithPrescription = uniqBy(this.cartStore.cartItemsWithPrescription, 'code')
        const uniqueCartItemsWithoutPrescription = uniqBy(this.cartStore.cartItemsWithoutPrescription, 'code')

        return [
            {
                title: t('publicPrescription'),
                data: uniqueCartItemsWithPrescription,
                isProductWithPrescription: true
            },
            {
                title: t('withoutPrescription'),
                data: uniqueCartItemsWithoutPrescription,
                isProductWithPrescription: false
            },
        ]
    }

    renderCartList = () => {
        return (
            <CartList cartSectionList={this.cartSectionList}/>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderCartList()}
            </SafeAreaView>
        )
    }
}

export default observer(CartScreen)
