import {observer} from 'mobx-react'
import React from 'react'
import {Text, View} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'
import styles from './styles'

const CartListHeader: React.FC<{
    isProductWithPrescription: boolean
    title: string
}> = ({
          isProductWithPrescription,
          title
      }) => (
    <View style={styles.container}>
        <View
            style={[styles.mainContainer, {
                borderTopColor: isProductWithPrescription ?
                    theme.colors.pink : theme.colors.graphiteGray,
                marginTop: isProductWithPrescription ? theme.spacingLarge : 0
            }]}>
            <View style={styles.orderTypeContainer}>
                {isProductWithPrescription && <Text style={styles.orderType}>{title}</Text>}
                <Text
                    style={styles.orderTypeOrNameText}>
                    {isProductWithPrescription ? 'Max Mustermann' : title}
                </Text>
            </View>
        </View>
    </View>
)

export default observer(CartListHeader)


