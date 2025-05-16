import {isAndroid} from '@utils/PlatformUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({
    searchAndBarcodeIcon: {
        tintColor: theme.colors.searchBarIconColor,
        resizeMode: 'contain',
        width: theme.spacingLarge,
        height: theme.spacingLarge,
        marginTop: 1
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
    },
    searchInputContainer: {
        padding: theme.spacingCommon,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        includeFontPadding: false,
        flex: 1,
        fontSize: isAndroid && theme.deviceWidth <= 360 ? theme.fontSize.major.extraSmall : theme.fontSize.major.medium,
        color: theme.colors.charcoal,
        fontFamily: theme.fontFamilySemiBold,
        textAlign: 'center',
        lineHeight: theme.spacingLarge
    },
    changeLanguageButton: {
        lineHeight: theme.spacingLarge,
        fontSize: theme.fontSize.major.small,
        fontFamily: theme.fontFamilySemiBold,
    }
})

export default styles
