import { StyleSheet, View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

const MyApp = () => {
	const theme = useTheme();

	return (
		<View
			style={{
				backgroundColor: theme.colors.background,
				width: "100%",
				height: "100%",
			}}
		>
			<View style={styles.headerContainer}>
				<View>
					<IconButton
						icon={"menu"}
						style={{
							backgroundColor: theme.colors.onBackground,
						}}
						iconColor={theme.colors.background}
						onPress={() => {
							alert("Menu button pressed");
						}}
					/>
					<IconButton
						icon={"account"}
						style={{
							backgroundColor: theme.colors.onBackground,
						}}
						iconColor={theme.colors.background}
						onPress={() => {
							alert("Menu button pressed");
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default MyApp;

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		borderColor: "white",
		borderWidth: 1,
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
