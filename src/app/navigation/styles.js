import { StyleSheet } from 'react-native'
import { theme } from '../assets/themes/ThemeProvider'

const navigatorStyles = StyleSheet.create({
	iconLabelContainer: {
		alignItems: 'center',
		width: 100
	},
	inactiveIcon: {
		tintColor: theme.colors.brandGrey,
		resizeMode: 'contain',
		height: 22
	},
	activeIcon: {
		tintColor: theme.colors.brandActive,
		resizeMode: 'contain',
		height: 22
	}
})

export default navigatorStyles
