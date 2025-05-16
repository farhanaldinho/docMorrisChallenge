import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'

import Images from '../assets/images'
import {theme} from '../assets/themes/ThemeProvider'

const Header: React.FC<{ onPress: () => void }> = ({onPress}) => (

    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
            <Image source={Images.icons.backButton}/>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {backgroundColor: theme.colors.white, paddingVertical: theme.spacingCommon, justifyContent: 'center'},
    backButtonContainer: {paddingHorizontal: theme.spacingLarge}
})

export default Header


