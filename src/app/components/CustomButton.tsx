import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native'

import {theme} from '../assets/themes/ThemeProvider'

const CustomButton: React.FC<{
    onPress: () => void
    borderColor?: string
    showBorder?: boolean
    buttonBgColor?: string
    buttonText: string
    buttonTextColor?: string
    disabled?: boolean
    customStyles?: ViewStyle
}> = ({
          onPress,
          showBorder,
          buttonBgColor,
          buttonText,
          buttonTextColor,
          borderColor,
          disabled,
          customStyles
      }) => {

    const getBorderColor = () => {
        if (showBorder && disabled) {
            return theme.colors.searchBarPlaceholder
        }

        return borderColor ?? theme.colors.brandActive
    }

    const getButtonColor = () => {
        if (disabled) {
            return theme.colors.searchBarPlaceholder
        }

        return buttonBgColor ?? theme.colors.brandActive
    }

    const getBorderWidth = () => {
        if (disabled) {
            return 0
        }

        return showBorder ? 1 : 0
    }

    const renderButtonTextColor = () => {
        return disabled ? theme.colors.charcoal : buttonTextColor ? buttonTextColor : theme.colors.white
    }

    return (

        <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, {
            borderColor: getBorderColor(),
            borderWidth: getBorderWidth(),
            backgroundColor: getButtonColor(),
        }, customStyles]}>
            <Text style={[styles.buttonText, {color: renderButtonTextColor()}]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: theme.spacingSmall,
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacingCommon
    },
    buttonText: {
        fontFamily: theme.fontFamilyMedium,
        fontSize: theme.fontSize.common.extraLarge,
        lineHeight: ResponsiveSizeUtils.size(22),
    }
})

export default CustomButton


