import {t} from 'i18next'
import {observer} from 'mobx-react'
import React from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'

import Images from '../../../assets/images'
import {Language} from '../../../assets/locales/I18next/i18next'
import {theme} from '../../../assets/themes/ThemeProvider'
import AppStore from '../../../store/AppStore'
import styles from './styles'

const Header: React.FC<{
    onChangeText: (value: string) => void
    handleLanguageChange: () => void
}> = ({onChangeText, handleLanguageChange}) => {
    const renderChangeLanguageButton = () => {
        return (
            <TouchableOpacity onPress={handleLanguageChange}>
                <Text style={[styles.changeLanguageButton, {
                    color: AppStore.currentLanguage === Language.german ? theme.colors.charcoal : theme.colors.blue,
                }]}>{AppStore.currentLanguage.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
                {renderChangeLanguageButton()}
                <TextInput
                    onChangeText={onChangeText}
                    accessibilityLabel={'SearchField'}
                    style={styles.textInput}
                    autoCorrect={false}
                    selectionColor={theme.colors.brandTertiary}
                    returnKeyType={'search'}
                    placeholder={t('search')}
                    allowFontScaling={false}
                    placeholderTextColor={theme.colors.searchBarPlaceholder}
                />
                <Image source={Images.icons.search} style={styles.searchAndBarcodeIcon}/>
            </View>
        </View>
    )
}

export default observer(Header)


