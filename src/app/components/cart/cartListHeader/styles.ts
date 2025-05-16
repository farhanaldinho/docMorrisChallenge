import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.spacingLarge,
        backgroundColor: theme.colors.white
    },
    mainContainer: {
        paddingVertical: theme.spacingCommon,
        paddingHorizontal: theme.spacingLarge,
        borderTopWidth: theme.spacingExtraSmall,
        borderTopRightRadius: theme.spacingSmall,
        borderTopLeftRadius: theme.spacingSmall,
        backgroundColor: theme.colors.lightgrey,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    orderTypeContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    orderTypeOrNameText: {
        fontSize: theme.fontSize.common.large,
        fontFamily: theme.fontFamilyMedium,
        color: theme.colors.charcoal,
        lineHeight: theme.spacingLarge
    },
    orderType: {
        fontSize: theme.fontSize.common.extraSmall,
        fontFamily: theme.fontFamilyRegular,
        color: theme.colors.pink,
        lineHeight: theme.spacingMedium,
        letterSpacing: 0.02,
    }
})

export default styles
