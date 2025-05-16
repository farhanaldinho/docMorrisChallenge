import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({
    searchResultsContainer: {
        paddingVertical: theme.spacingSmall,
        paddingHorizontal: theme.spacingLarge,
        backgroundColor: theme.colors.white,
    },
    searchResults: {
        fontSize: theme.fontSize.common.extraLarge,
        color: theme.colors.charcoal,
        fontFamily: theme.fontFamilyMedium,
        lineHeight: theme.spacingLarge
    },
    loaderContainer: {
        paddingVertical: theme.spacingLarge
    },
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

export default styles
