import Heading from '@components/Heading'
import ResponsiveSizeUtils from '@utils/ResponsiveSizeUtils'
import {t} from 'i18next'
import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import HTMLView from 'react-native-htmlview'

import Images from '../assets/images'
import {theme} from '../assets/themes/ThemeProvider'

const HtmlViewer: React.FC<{ descriptionAsHtml: string; label?: string }> = ({descriptionAsHtml, label}) => {

    const [showAll, setShowAll] = useState(false)

    const removeExtraSpacesAndLineBreaks = () => {
        // Remove leading and trailing whitespace and line breaks
        let trimmedHtml = descriptionAsHtml.trim()
        trimmedHtml = trimmedHtml.replace(/\s+/g, '')
        return trimmedHtml
    }

    const displayText = showAll ?
        removeExtraSpacesAndLineBreaks() :
        removeExtraSpacesAndLineBreaks().slice(0, 200)

    const onPress = () => setShowAll(!showAll)

    return (
        <View>
            {label && <Heading label={label}/>}
            <HTMLView
                value={displayText}
                stylesheet={{h2: htmlStyles.h2, h3: htmlStyles.h3, p: htmlStyles.p}}
            />
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{showAll ? t('readLess') : t('readMore')}</Text>
                <Image source={Images.icons.rightArrow}
                       style={[styles.buttonImage, {transform: [{rotate: showAll ? '-90deg' : '0deg'}]}]}/>
            </TouchableOpacity>
        </View>

    )
}


const htmlStyles = StyleSheet.create({
    h2: {
        color: theme.colors.charcoal,
        lineHeight: 21,
        fontSize: theme.fontSize.common.extraLarge,
        fontFamily: theme.fontFamilyMedium
    },
    h3: {
        color: theme.colors.charcoal,
        lineHeight: 21,
        fontSize: theme.fontSize.common.extraLarge,
        fontFamily: theme.fontFamilyMedium
    },
    p: {
        color: theme.colors.charcoal,
        lineHeight: 24,
        fontSize: theme.fontSize.common.large,
        fontFamily: theme.fontFamilyRegular
    }
})

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: theme.spacingMedium,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: theme.fontFamilyMedium,
        fontSize: theme.fontSize.common.extraLarge,
        lineHeight: ResponsiveSizeUtils.size(21),
        color: theme.colors.brandActive
    },
    buttonImage: {
        height: theme.spacingMedium,
        width: theme.spacingMedium,
        resizeMode: 'contain',
        tintColor: theme.colors.brandActive,
        marginStart: theme.spacingSmall
    }
})


export default HtmlViewer



