import {
	Button,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GridItem from '../../components/gridItem/gridItem';
import React from 'react';
import { selectCategory } from '../../store/actions/category.action';

// import { CATEGORIES } from '../../utils/data/categories';

const Categories = ({ navigation }) => {
	const categories = useSelector((state) => state.categories.categories);
	const dispatch = useDispatch();
	const handleSelectedCategory = (item) => {
		dispatch(selectCategory(item.id));
		navigation.navigate('Products', {
			// categoryId: item.id,
			name: item.title,
			color: item.color,
		});
	};

	const renderGridItem = ({ item }) => {
		dispatch(selectCategory(item.id));
		// No neseito agregar el onSelected ya que lo tengo de forma global en mi constante handleSelectedCategory
		return <GridItem item={item} onSelected={handleSelectedCategory} />;
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				{/* Reemplazo el Texto y el button que tenia por un FlatList */}
				<FlatList
					data={
						categories
					} /* La data ya se toma de categoryBreads y no de CATEGORIES*/
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
