import { Text } from 'react-native'

import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@shopify/restyle'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Outfit_400Regular, Outfit_500Medium } from '@expo-google-fonts/outfit'

import { theme } from '@/styles/theme'

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Outfit_400Regular,
		Outfit_500Medium,
	})
	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			{!fontsLoaded ? <Text>Carregando...</Text> : <Stack />}
		</ThemeProvider>
	)
}
