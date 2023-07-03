import { BlurView } from "@react-native-community/blur";
import { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import {
	Button,
	IconButton,
	Searchbar,
	Text,
	useTheme,
} from "react-native-paper";

type Event = {
	id: string;
	name: string;
	date: Date;
	time: string;
	coverImage: string;
	location: string;
	price: number;
	tags: string[];
};

type Filter = "all" | "feed" | "food" | "tech" | "music";

const MyApp = () => {
	const theme = useTheme();
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState<Filter>("feed");

	return (
		<ScrollView
			style={{
				backgroundColor: theme.colors.background,
				width: "100%",
				height: "100%",
			}}
			contentContainerStyle={{
				alignItems: "center",
			}}
		>
			<View style={styles.headerContainer}>
				<IconButton
					mode="contained-tonal"
					icon={"menu"}
					iconColor={theme.colors.background}
					onPress={() => {}}
				/>
				<Text variant="headlineSmall">Home</Text>
				<IconButton
					mode="contained-tonal"
					icon={"account"}
					iconColor={theme.colors.background}
					onPress={() => {}}
				/>
			</View>
			<Searchbar
				placeholder="Search events"
				value={searchQuery}
				onChangeText={setSearchQuery}
				style={{
					width: "90%",
				}}
				onSubmitEditing={() => {}}
			/>

			<View
				style={{
					margin: 24,
					justifyContent: "space-between",
					flexDirection: "row",
					alignItems: "center",
					width: "90%",
				}}
			>
				<Text variant="labelLarge">Upcoming events</Text>
				<Button mode="text">See all</Button>
			</View>
			<ScrollView
				horizontal
				contentContainerStyle={{
					display: "flex",
					marginHorizontal: 24,
					marginBottom: 24,
					flexDirection: "row",
					gap: 16,
				}}
			>
				<Button
					mode={activeFilter === "feed" ? "contained" : "contained-tonal"}
					icon={"lightning-bolt-circle"}
					onPress={() => setActiveFilter("feed")}
				>
					My feed
				</Button>
				<Button
					icon={"food-outline"}
					mode={activeFilter === "food" ? "contained" : "contained-tonal"}
					onPress={() => setActiveFilter("food")}
				>
					Food
				</Button>
				<Button
					icon={"xml"}
					mode={activeFilter === "tech" ? "contained" : "contained-tonal"}
					onPress={() => setActiveFilter("tech")}
				>
					Tech
				</Button>
				<Button
					icon={"music-note"}
					mode={activeFilter === "music" ? "contained" : "contained-tonal"}
					onPress={() => setActiveFilter("music")}
				>
					Music
				</Button>
			</ScrollView>

			<View
				style={{
					width: "80%",
					alignItems: "center",
					overflow: "hidden",
					borderRadius: 32,
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
		</ScrollView>
	);
};

export default MyApp;

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
});
