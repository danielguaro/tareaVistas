import {
	Button,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { CATEGORIES } from '../../utils/data/categories';
import GridItem from '../../components/gridItem/gridItem';
import React from 'react';

const Categories = ({ navigation }) => {
	const handleSelectedCategory = (item) => {
		navigation.navigate('Products', {
			categoryId: item.id,
			name: item.title,
			color: item.color,
		});
	};

	const renderGridItem = ({ item }) => {
		// No neseito agregar el onSelected ya que lo tengo de forma global en mi constante handleSelectedCategory
		return <GridItem item={item} onSelected={handleSelectedCategory} />;
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				{/* Reemplazo el Texto y el button que tenia por un FlatList */}
				<FlatList
					data={CATEGORIES}
					renderItem={renderGridItem}
					keyExtractor={(item) => item.id} //Para saber a que Id pertenece.
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Categories;
