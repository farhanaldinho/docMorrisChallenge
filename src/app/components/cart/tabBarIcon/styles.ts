import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        height: theme.spacingMedium,
        width: theme.spacingMedium,
        backgroundColor: theme.colors.brandTertiary,
        borderRadius: theme.spacingSmall,
        justifyContent: 'center',
        elevation: 1,
        right: theme.spacingMajor,
        top: 0,
        zIndex: 1,
    },
    badgeTitle: {
        textAlign: 'center',
        color: theme.colors.inverseTextColor,
        fontSize: theme.fontSize.minor.large,
        fontFamily: theme.fontFamilyMedium
    }
})

export {
    styles
}
