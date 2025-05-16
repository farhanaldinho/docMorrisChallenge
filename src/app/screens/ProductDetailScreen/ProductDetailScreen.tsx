import CustomButton from '@components/CustomButton'
import Header from '@components/Header'
import HtmlViewer from '@components/HtmlViewer'
import ProductDetailsCard from '@components/product/productDetailsCard/ProductDetailsCard'
import {ScreenNavigationProp, ScreenParamList, ScreenRouteProp} from '@navigation/types'
import {t} from 'i18next'
import React from 'react'
import {Image, ImageSourcePropType, SafeAreaView, ScrollView, Text, View} from 'react-native'

import Images from '../../assets/images'
import {theme} from '../../assets/themes/ThemeProvider'
import {Product} from '../../models/Product'
import Screen from '../Screen'
import styles from './styles'

export type ProductDetailScreenParamList = ScreenParamList<'ProductDetailScreen'>

interface ProductDetailScreenProps {
    item: Product
    navigation: ScreenNavigationProp<ProductDetailScreenParamList>
    route: ScreenRouteProp<ProductDetailScreenParamList>

}

export interface DetailsListItem {
    label: string
    value: string
    image: ImageSourcePropType
}

class ProductDetailScreen extends Screen {
    constructor(props: ProductDetailScreenProps) {
        super(props)
    }

    get product() {
        return this.props.route.params.product ?? {}
    }

    get detailsList() {
        return [
            {
                label: t('packageSize'),
                value: this.product?.quantity,
                image: Images.icons.packageSize
            },
            {
                label: t('productForm'),
                value: this.product?.pharmaceuticalForm,
                image: Images.icons.pharmaceuticalForm
            },
            {
                label: t('productCode'),
                value: this.product?.code,
                image: Images.icons.code
            },
            {
                label: t('productCompany'),
                value: this.product?.companyName,
                image: Images.icons.company
            },

        ]
    }

    renderProductImage = () => {
        const productImage = this.product?.mediaGroupImages[0]?.media?.px300

        return (
            <View style={styles.productImageContainer}>
                <Image source={{uri: productImage}} style={styles.productImage}/>
            </View>
        )
    }

    renderProductName = () => {
        return (
            <View style={styles.nameContainer}>
                <Text style={styles.productName}>{this.product?.productName}</Text>
            </View>
        )
    }

    renderAddToCartButton = () => {
        const handleOnPress = () => this.cartStore.addItemToCart(this.product, false)

        return (
            <View style={styles.addToCartButtonContainer}>
                <CustomButton
                    disabled={!this.product?.inStock}
                    buttonText={t('addToCart')}
                    onPress={handleOnPress}
                />
            </View>
        )
    }

    renderRedeemButton = () => {
        const handleOnPress = () => this.cartStore.addItemToCart(this.product, true)

        return (
            <CustomButton
                disabled={!this.product?.inStock}
                buttonTextColor={theme.colors.brandActive}
                buttonBgColor={theme.colors.white}
                showBorder={true}
                buttonText={t('redeem')}
                onPress={handleOnPress}
            />
        )
    }

    renderButtons = () => {
        return (
            <View style={styles.buttonContainer}>
                {this.renderAddToCartButton()}
                {this.renderRedeemButton()}
            </View>
        )
    }

    renderDetailsCard = () => {
        return (
            <ProductDetailsCard heading={t('details')} detailsList={this.detailsList}/>
        )
    }

    renderDescription = () => {
        return (
            <View style={styles.descriptionContainer}>
                <HtmlViewer label={t('description')} descriptionAsHtml={this.product?.descriptionAsHtml}/>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header onPress={this.props?.navigation?.goBack}/>
                <ScrollView style={styles.mainContainer}>
                    {this.renderProductImage()}
                    {this.renderProductName()}
                    {this.renderButtons()}
                    {this.renderDetailsCard()}
                    {this.renderDescription()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ProductDetailScreen
