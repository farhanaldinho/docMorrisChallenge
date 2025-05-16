import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {StyleSheet} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: theme.spacingSmall,
        paddingTop: theme.spacingMedium,
        paddingHorizontal: theme.spacingMedium,
        borderColor: theme.colors.offWhite
    },
    detailItemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: theme.spacingMedium,
    },
    detailItemImage: {
        resizeMode: 'contain',
        height: theme.spacingLarge,
        width: theme.spacingLarge,
        marginEnd: theme.spacingCommon
    },
    detailsTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    detailsItemLabel: {
        fontSize: theme.fontSize.common.medium,
        fontFamily: theme.fontFamilyMedium,
        color: theme.colors.charcoal,
        lineHeight: ResponsiveSizeUtils.size(18),
    },
    detailsItemValue: {
        fontSize: theme.fontSize.common.medium,
        fontFamily: theme.fontFamilyMedium,
        color: theme.colors.graphiteGray,
        lineHeight: ResponsiveSizeUtils.size(18),
    }
})

export default styles


