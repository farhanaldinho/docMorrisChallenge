import {t} from 'i18next'
import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'
import {Product} from '../../../models/Product'
import styles from './styles'

const ProductListItem: React.FC<{
    item?: Product
    onClick: (item: Product | undefined) => void
}> = ({item, onClick}) => {

    const {
        price,
        basePrice,
        productName,
        categorization,
        quantity,
        pharmaceuticalForm,
        mediaGroupImages,
        inStock,
    } = item ?? {}


    const productImage = mediaGroupImages[0]?.media?.px240

    const renderName = () => (
        <Text style={styles.productName}>{productName}</Text>
    )

    const renderDetailsWithSeparators = (...values: (string | undefined)[]) => {
        return values.filter(Boolean).join(' • ')
    }

    const renderDetails = () => {

        return (
            <View style={styles.detailsContainer}>
                <Text style={styles.productDetails}>
                    {renderDetailsWithSeparators(quantity, pharmaceuticalForm, categorization)}
                </Text>
            </View>
        )
    }

    const renderPrice = () => (
        <Text style={styles.productPrice}>{price} €</Text>
    )

    const renderBasePrice = () => (
        <Text style={styles.productBasePrice}>{basePrice}</Text>
    )

    const handleOnPress = () => {
        onClick(item)
    }

    return (
        <TouchableOpacity onPress={handleOnPress} style={styles.mainContainer}>
            <View style={styles.container}>
                <Image source={{uri: productImage}} style={styles.productImage}/>
                <View style={styles.productContainer}>
                    <View style={styles.productDetailsContainer}>
                        {renderName()}
                        {renderDetails()}
                    </View>
                    <View style={styles.productPriceContainer}>
                        {renderPrice()}
                        {renderBasePrice()}
                    </View>
                    <Text style={[styles.productStockInfo,
                        {color: inStock ? theme.colors.brightGreen : theme.colors.searchBarPlaceholder}]}>
                        {inStock ? t('inStock') : t('outOfStock')}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductListItem
