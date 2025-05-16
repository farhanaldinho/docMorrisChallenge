import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({

    mainContainer: {
        padding: theme.spacingLarge,
        backgroundColor: theme.colors.white,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    productContainer: {
        flex: 1,
    },
    productDetailsContainer: {
        marginBottom: theme.spacingSmall,
    },
    detailsContainer: {
        flexDirection: 'row',
    },
    productPriceContainer: {
        marginBottom: theme.spacingSmall,
    },
    productImage: {
        resizeMode: 'contain',
        height: ResponsiveSizeUtils.size(110),
        width: ResponsiveSizeUtils.size(110),
        marginEnd: theme.spacingMedium
    },
    productName: {
        fontSize: theme.fontSize.common.large,
        color: theme.colors.charcoal,
        marginBottom: theme.spacingExtraSmall,
        lineHeight: ResponsiveSizeUtils.size(20),
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
    },
    productDetails: {
        fontSize: theme.fontSize.common.medium,
        color: theme.colors.graphiteGray,
        lineHeight: theme.spacingMedium,
        fontFamily: 'Poppins-Medium',
    },
    productPrice: {
        fontSize: theme.fontSize.major.small,
        color: theme.colors.charcoal,
        lineHeight: theme.spacingLarge,
        fontFamily: 'Poppins-SemiBold',
    },
    productBasePrice: {
        fontSize: theme.fontSize.common.extraSmall,
        color: theme.colors.graphiteGray,
        lineHeight: theme.spacingMedium,
        fontFamily: 'Poppins-Medium',
    },
    productStockInfo: {
        fontSize: theme.fontSize.common.extraSmall,
        lineHeight: theme.spacingMedium,
        fontFamily: 'Poppins-Medium',
    }
})

export default styles
