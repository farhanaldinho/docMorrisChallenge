import Heading from '@components/Heading'
import React from 'react'
import {Image, Text, View} from 'react-native'

import {DetailsListItem} from '../../../screens/ProductDetailScreen/ProductDetailScreen'
import styles from './styles'


const ProductDetailsCard: React.FC<{ detailsList: DetailsListItem[]; heading: string }> = ({detailsList, heading}) => {

    const renderDetailItem = (item: DetailsListItem, index: number) => {
        const image = item?.image
        const label = item?.label
        const value = item?.value

        return (
            <View key={index} style={styles.detailItemContainer}>
                <Image source={image} style={styles.detailItemImage}/>
                <View style={styles.detailsTextContainer}>
                    <Text style={styles.detailsItemLabel}>{label}</Text>
                    <Text style={styles.detailsItemValue}>{value}</Text>
                </View>
            </View>)
    }

    return (
        <View>
            {heading && <Heading label={heading}/>}
            <View style={styles.container}>
                {detailsList.map((item, index) => (renderDetailItem(item, index)))}
            </View>
        </View>

    )
}

export default ProductDetailsCard


