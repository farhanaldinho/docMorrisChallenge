import {ScreenNavigationProp, ScreenRouteProp} from '@navigation/types'
import {t} from 'i18next'
import {observer} from 'mobx-react'
import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'

import Images from '../../../assets/images'
import {Product} from '../../../models/Product'
import {CartScreenParamList} from '../../../screens/CartScreen/CartScreen'
import Screen from '../../../screens/Screen'
import styles from './styles'

interface CartListItemProps {
    item: Product
    navigation?: ScreenNavigationProp<CartScreenParamList>
    route?: ScreenRouteProp<CartScreenParamList>
    isProductWithPrescription?: boolean
}

class CartListItem extends Screen {
    constructor(props: CartListItemProps) {
        super(props)
    }

    get product(): Product {
        return this.props.item
    }

    get productQuantity(): number {
        return this.cartStore.productQuantities[this.product?.code]
    }

    get isProductWithPrescription(): boolean {
        return this.props.isProductWithPrescription
    }

    get totalPrice() {
        return (this.productQuantity * this.product?.price).toFixed(2)
    }

    renderProductName = () => {
        return (
            <View style={styles.productNameContainer}>
                <Text numberOfLines={2} style={styles.productName}>{this.product?.productName}</Text>
            </View>
        )
    }

    renderRemoveButton = () => {
        const removeProduct = () => {
            this.cartStore.removeItemFromCart(this.product?.code)
        }

        const isProductRemovable = this.productQuantity === 1

        return (
            <TouchableOpacity onPress={removeProduct} style={styles.amountButtonContainer}>
                <Image source={isProductRemovable ? Images.icons.bin : Images.icons.minus}
                       style={styles.amountButton}/>
            </TouchableOpacity>
        )
    }

    renderAddButton = () => {
        const addProduct = () => {
            this.cartStore.addItemToCart(this.product, this.isProductWithPrescription)
        }

        return (
            <TouchableOpacity onPress={addProduct} style={styles.amountButtonContainer}>
                <Image source={Images.icons.plus} style={styles.amountButton}/>
            </TouchableOpacity>
        )
    }

    renderTotalQuantity = () => {
        return (
            <View style={styles.totalQuantityContainer}>
                <Text style={styles.totalQuantity}>{this.productQuantity}</Text>
            </View>
        )
    }

    renderQuantityContainer = () => {

        return (
            <View>
                <Text style={styles.quantity}>{t('quantity')}</Text>
                <View style={styles.quantityButtonAndPriceContainer}>
                    <View style={styles.quantityButtonContainer}>
                        {this.renderRemoveButton()}
                        {this.renderTotalQuantity()}
                        {this.renderAddButton()}
                    </View>
                    <View>
                        <Text style={styles.totalPrice}>{this.totalPrice} €</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Image source={{uri: this.product?.mediaGroupImages[0].media.px140}} style={styles.productImage}/>
                    <View style={styles.productDetailsContainer}>
                        {this.renderProductName()}
                        {this.renderQuantityContainer()}
                    </View>
                </View>
            </View>

        )
    }
}

export default observer(CartListItem)
