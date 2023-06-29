import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import {
	SafeAreaProvider as RNSafeAreaProvider,
	SafeAreaView,
} from "react-native-safe-area-context";

const SafeAreaProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = useTheme();

	return (
		<RNSafeAreaProvider>
			<SafeAreaView
				mode="padding"
				style={{
					backgroundColor: theme.colors.background,
				}}
			>
				{children}
			</SafeAreaView>
		</RNSafeAreaProvider>
	);
};

export default SafeAreaProvider;

const styles = StyleSheet.create({});
