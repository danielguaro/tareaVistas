import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import React from 'react';

const { width, height } = Dimensions.get('window');

const GridItem = ({ item, onSelected }) => {
	//item = para recibir los datos de las categories.js
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity
				style={[styles.container, { backgroundColor: item.color }]}
				onPress={() => onSelected(item)}
			>
				<View>
					<Text style={styles.title}>{item.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: height * 0.2,
	},
	container: {
		flex: 1,
		elevation: 6,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		borderRadius: 16,
	},
	title: {
		fontWeight: '700',
		fontFamily: 'Comfortaa-Bold',
		fontSize: 17,
	},
});

export default GridItem;
