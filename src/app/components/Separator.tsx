import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import React from 'react'
import {StyleSheet, View} from 'react-native'

import {theme} from '../assets/themes/ThemeProvider'

const Separator = () => (
    <View style={styles.container}/>
)

const styles = StyleSheet.create({
    container: {backgroundColor: theme.colors.lightSilver, height: ResponsiveSizeUtils.size(1),}
})

export default Separator


