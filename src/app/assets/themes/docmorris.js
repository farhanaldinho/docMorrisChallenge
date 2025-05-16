import {PLATFORM} from '@utils/PlatformUtils'
import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {Dimensions, Platform} from 'react-native'

const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS

const fontSize = {
    minor: {
        extraSmall: ResponsiveSizeUtils.size(5),
        small: ResponsiveSizeUtils.size(6),
        medium: ResponsiveSizeUtils.size(7),
        large: ResponsiveSizeUtils.size(8),
        extraLarge: ResponsiveSizeUtils.size(9)
    },
    common: {
        extraSmall: ResponsiveSizeUtils.size(10),
        small: ResponsiveSizeUtils.size(11),
        medium: ResponsiveSizeUtils.size(12),
        large: ResponsiveSizeUtils.size(13),
        extraLarge: ResponsiveSizeUtils.size(14)
    },
    major: {
        extraSmall: ResponsiveSizeUtils.size(15),
        small: ResponsiveSizeUtils.size(16),
        medium: ResponsiveSizeUtils.size(17),
        large: ResponsiveSizeUtils.size(18),
        extraLarge: ResponsiveSizeUtils.size(24)
    }
}

const colors = {
    white: '#ffffff',
    brandGrey: '#666',
    brandActive: '#00463d',
    brandTertiary: '#00965a',
    charcoal: '#343434',
    graphiteGray: '#535353',
    brightGreen: '#00965A',
    inverseTextColor: '#fff',
    searchBarPlaceholder: '#a8a8a8',
    brandPrimary: '#00463d',
    lightSilver: '#F2F2F2',
    searchBarIconColor: '#343434',
    brandDark: '#222',
    offWhite: '#EDEDED',
    lightgrey: '#FAF8F8',
    pink: '#E6007E',
    blue:'#1F42FFFF'
}

const docmorris = {
    deviceWidth,
    fontSize,
    colors,
    get badgeColor() {
        return this.brandTertiary
    },
    statusBarDefault: platform === PLATFORM.IOS ? 'dark-content' : 'light-content',
    spacingExtraSmall: ResponsiveSizeUtils.size(4),
    spacingSmall: ResponsiveSizeUtils.size(8),
    spacingCommon: ResponsiveSizeUtils.size(12),
    spacingMedium: ResponsiveSizeUtils.size(16),
    spacingLarge: ResponsiveSizeUtils.size(24),
    spacingExtraLarge: ResponsiveSizeUtils.size(26),
    spacingMajor: ResponsiveSizeUtils.size(30),
    fontFamilyRegular: 'Poppins-Regular',
    fontFamilyMedium: 'Poppins-Medium',
    fontFamilySemiBold: 'Poppins-SemiBold'
}

export default docmorris
