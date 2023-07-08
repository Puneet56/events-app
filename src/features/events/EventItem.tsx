import { BlurView } from "@react-native-community/blur";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const EventItem = () => {
	return (
		<View
			style={{
				width: "80%",
				alignItems: "center",
				overflow: "hidden",
				borderRadius: 32,
				marginBottom: 24,
			}}
		>
			<ImageBackground
				style={{
					width: "100%",
					height: 300,
					position: "relative",
				}}
				resizeMode="cover"
				source={{
					uri: "https://picsum.photos/300/200",
				}}
			>
				<BlurView
					blurType="light"
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: 70,
						paddingHorizontal: 12,
						paddingVertical: 4,
						display: "flex",
					}}
				>
					<Text variant="titleLarge">Hello</Text>
				</BlurView>
			</ImageBackground>
		</View>
	);
};

export default EventItem;

const styles = StyleSheet.create({});
