import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {t} from 'i18next'
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import Images from '../assets/images'
import {theme} from '../assets/themes/ThemeProvider'

const EmptyList: React.FC<{ text?: string }> = ({text}) => (

    <View style={styles.emptyListContainer}>
        <Image source={Images.icons.search} style={styles.emptyListIcon}/>
        <Text style={styles.emptyListText}>{text ? text : t('itemNotFound')}</Text>
    </View>
)

const styles = StyleSheet.create({
    emptyListContainer: {
        flex: 1,
        marginTop: theme.spacingLarge,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyListIcon: {
        height: ResponsiveSizeUtils.size(110),
        width: ResponsiveSizeUtils.size(110),
        resizeMode: 'contain',
        tintColor: theme.colors.searchBarPlaceholder
    },
    emptyListText: {
        marginTop: theme.spacingLarge,
        fontSize: theme.fontSize.common.extraLarge,
        color: theme.colors.charcoal,
        fontFamily: theme.fontFamilyMedium,
        lineHeight: theme.spacingLarge
    }
})

export default EmptyList


