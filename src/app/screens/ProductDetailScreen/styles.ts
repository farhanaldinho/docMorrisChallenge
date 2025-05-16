import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    mainContainer: {
        paddingHorizontal: theme.spacingLarge,
    },
    productImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacingMedium
    },
    productImage: {
        resizeMode: 'contain',
        height: ResponsiveSizeUtils.size(220),
        width: ResponsiveSizeUtils.size(327),
    },
    nameContainer: {
        marginBottom: theme.spacingExtraLarge
    },
    productName: {
        fontFamily: theme.fontFamilySemiBold,
        fontSize: theme.fontSize.major.large,
        lineHeight: ResponsiveSizeUtils.size(22),
        fontColor: theme.colors.charcoal
    },
    buttonContainer: {
        marginBottom: theme.spacingMedium
    },
    addToCartButtonContainer: {
        marginBottom: theme.spacingMedium
    },
    descriptionContainer: {
        marginTop: theme.spacingMajor,
        marginBottom: theme.spacingLarge
    },
})

export default styles
