import {
	Button,
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import React from 'react';

const { width, height } = Dimensions.get('window');

const ProductDetail = ({ navigation, route }) => {
	const { product } = route.params;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.data}>
				<Text style={styles.title}>{product.name}</Text>
				<Text style={styles.information}>{product.description}</Text>
				<Text style={styles.information}>{product.weight}</Text>
				<Text style={styles.informationPrice}>$ {product.price}</Text>
			</View>
			<View>
				<Button
					title="Go to Categories"
					onPress={() => navigation.popToTop()} //Para ir a la parte superior del Stack (basicamente, volver al inicio.)
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	data: {
		height: height * 0.6,
		backgroundColor: '#F0F0F0',
	},
	title: {
		marginBottom: 40,
		fontWeight: 'bold',
		fontSize: 24,
	},
	information: {
		marginBottom: 10,
	},
	informationPrice: {
		color: '#521262',
		fontWeight: 'bold',
		fontSize: 18,
		alignSelf: 'center',
	},
});

export default ProductDetail;
