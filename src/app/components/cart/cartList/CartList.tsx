import CartListHeader from '@components/cart/cartListHeader/CartListHeader'
import CartListItem from '@components/cart/cartListItem/CartListItem'
import CustomButton from '@components/CustomButton'
import EmptyList from '@components/EmptyList'
import {t} from 'i18next'
import {observer} from 'mobx-react'
import React from 'react'
import {Image, SectionList, Text, View} from 'react-native'

import Images from '../../../assets/images'
import I18next from '../../../assets/locales/I18next/i18next'
import {Product} from '../../../models/Product'
import AppStore from '../../../store/AppStore'
import CartStore from '../../../store/CartStore'
import styles from './styles'

interface CartSectionItem {
    title: string
    data: Product[]
    isProductWithPrescription: boolean
}

const CartList: React.FC<{
    cartSectionList: CartSectionItem[]
}> = ({cartSectionList}) => {

    I18next.language = AppStore.currentLanguage
    const renderListItem = ({item, section}: {
        item: Product
        section: { title: string; data: Product[]; isProductWithPrescription: boolean }
    }) => {
        return (
            <CartListItem item={item} isProductWithPrescription={section.isProductWithPrescription}/>
        )
    }

    const renderSectionHeader = ({section}: {
        section: { title: string; data: Product[]; isProductWithPrescription: boolean }
    }) => {
        return (
            <CartListHeader title={section?.title} isProductWithPrescription={section?.isProductWithPrescription}/>
        )
    }

    const renderTotalPrice = () => {
        return (
            <View style={styles.priceOverviewContainer}>
                <Image source={Images.icons.totalPriceBorder} style={styles.priceOverviewImage}/>
                <View style={styles.priceContainer}>
                    <Text style={styles.totalPrice}>{t('totalPrice')}</Text>
                    <Text style={styles.totalPrice}>{CartStore.totalPrice()} €</Text>
                </View>
            </View>
        )
    }

    const renderOrderButton = () => {
        const handleOnPress = () => {
            return
        }

        return (
            <View style={styles.orderButtonContainer}>
                <CustomButton onPress={handleOnPress} buttonText={t('orderWithCosts')}
                              customStyles={styles.orderButton}/>
            </View>
        )
    }

    const renderEmptyList = () => {
        return (<EmptyList text={('addArticle')}/>)
    }

    const filteredData = cartSectionList.filter(cartSection => cartSection.data.length > 0)

    return (
        <View style={styles.mainContainer}>
            <View
                style={styles.container}>
                <SectionList
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    sections={filteredData}
                    keyExtractor={(item, index) => item?.code + index}
                    renderItem={renderListItem}
                    renderSectionHeader={renderSectionHeader}
                    ListEmptyComponent={renderEmptyList}
                    ListFooterComponent={filteredData?.length > 0 ? renderTotalPrice : <></>}
                />
            </View>
            {filteredData?.length > 0 && renderOrderButton()}
        </View>
    )

}

export default observer(CartList)


