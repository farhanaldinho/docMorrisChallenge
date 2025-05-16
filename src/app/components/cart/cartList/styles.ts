import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: ResponsiveSizeUtils.size(90),
        backgroundColor: theme.colors.lightgrey
    },
    contentContainer: {
        shadowColor: theme.colors.graphiteGray,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.5,
    },
    orderButton: {
        borderRadius: ResponsiveSizeUtils.size(6)
    },
    orderButtonContainer: {
        zIndex: 1,
        width: theme.deviceWidth,
        position: 'absolute',
        bottom: 0,
        padding: theme.spacingLarge,
        backgroundColor: theme.colors.white
    },
    mainContainer: {flex: 1},
    priceOverviewContainer: {
        backgroundColor: theme.colors.lightgrey,
        paddingBottom: theme.spacingLarge,
        paddingTop: theme.spacingSmall,
    },
    priceContainer: {
        paddingHorizontal: theme.spacingLarge,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalPrice: {
        fontFamily: theme.fontFamilySemiBold,
        fontSize: theme.fontSize.major.small,
        color: theme.colors.charcoal,
        lineHeight: theme.spacingLarge,
    },
    priceOverviewImage: {
        height: theme.spacingMedium,
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: -6,
    },
})

export default styles
