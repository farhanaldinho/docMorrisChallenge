import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.spacingLarge,
        backgroundColor: theme.colors.white
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.white,
        paddingVertical: theme.spacingLarge,
        paddingStart: theme.spacingMedium,
        paddingEnd: theme.spacingLarge,
    },
    productImage: {
        resizeMode: 'contain',
        height: ResponsiveSizeUtils.size(48),
        width: ResponsiveSizeUtils.size(48)
    },
    productDetailsContainer: {
        flex: 1,
        marginStart: theme.spacingMedium,
    },
    productNameContainer: {
        marginBottom: theme.spacingExtraSmall
    },
    productName: {
        fontWeight: 'bold',
        fontFamily: theme.fontFamilyRegular,
        fontSize: theme.fontSize.common.large,
        color: theme.colors.charcoal,
        lineHeight: ResponsiveSizeUtils.size(20)
    },
    quantity: {
        lineHeight: theme.spacingMedium,
        fontSize: theme.fontSize.common.extraSmall,
        color: theme.colors.graphiteGray,
        letterSpacing: 0.02,
        marginBottom: theme.spacingSmall,
    },
    amountButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: ResponsiveSizeUtils.size(10),
        paddingHorizontal: ResponsiveSizeUtils.size(6),
        borderWidth: ResponsiveSizeUtils.size(1),
        borderColor: theme.colors.lightSilver,
        backgroundColor: theme.colors.lightgrey,
        borderRadius: ResponsiveSizeUtils.size(6),
    },
    amountButton: {
        height: ResponsiveSizeUtils.size(20),
        width: ResponsiveSizeUtils.size(20),
        resizeMode: 'contain'
    },
    quantityButtonAndPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    quantityButtonContainer: {
        flexDirection: 'row',
    },
    totalQuantityContainer: {
        borderWidth: ResponsiveSizeUtils.size(1),
        borderColor: theme.colors.brandActive,
        borderRadius: ResponsiveSizeUtils.size(6),
        marginHorizontal: ResponsiveSizeUtils.size(6),
        width: ResponsiveSizeUtils.size(48),
        paddingVertical: theme.spacingCommon,
        alignItems: 'center',
        justifyContent: 'center'
    },
    totalQuantity: {
        fontFamily: theme.fontFamilyMedium,
        fontSize: theme.fontSize.common.medium,
        color: theme.colors.charcoal,
        lineHeight: theme.spacingMedium,
    },
    totalPrice: {
        fontFamily: theme.fontFamilySemiBold,
        fontSize: theme.fontSize.major.small,
        color: theme.colors.charcoal,
        lineHeight: theme.spacingLarge,
    }
})

export default styles
