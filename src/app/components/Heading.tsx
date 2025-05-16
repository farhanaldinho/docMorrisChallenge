import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {theme} from '../assets/themes/ThemeProvider'

const Heading: React.FC<{
    label: string
}> = ({label}) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {flex: 1, marginBottom: theme.spacingMedium},
    label: {
        fontSize: theme.fontSize.major.small,
        color: theme.colors.charcoal,
        fontFamily: theme.fontFamilySemiBold,
        lineHeight: theme.spacingLarge
    }
})

export default Heading


