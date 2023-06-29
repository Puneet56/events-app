import {
	MD3DarkTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";
import MyApp from "./src/MyApp";
import SafeAreaProvider from "./src/providers/safe-area";

const theme = {
	...DefaultTheme,
	dark: true,
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<SafeAreaProvider>
				<MyApp />
			</SafeAreaProvider>
		</PaperProvider>
	);
}
