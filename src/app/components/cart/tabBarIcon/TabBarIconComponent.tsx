import {styles} from '@components/cart/tabBarIcon/styles'
import navigatorStyles from '@navigation/styles'
import {observer} from 'mobx-react'
import React from 'react'
import {Image, Text, View} from 'react-native'

import Images from '../../../assets/images'
import Screen from '../../../screens/Screen'

class CartTabBarIconComponent extends Screen {

    render() {
        return (
            <View>
                {this.cartStore.cartItems.length > 0 && <View style={styles.badge}>
                    <Text style={styles.badgeTitle}>{this.cartStore.cartItems.length}</Text>
                </View>}
                <View style={navigatorStyles.iconLabelContainer}>
                    <Image source={Images.icons.cart}/>
                </View>
            </View>
        )
    }
}

export default observer(CartTabBarIconComponent)
