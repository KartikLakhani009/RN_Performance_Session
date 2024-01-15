import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {TProduct, products} from './productData';
import ProductItem from './ProductCard';

interface IProductListProps {}

const ProductList = (props: IProductListProps) => {

  const renderItem = useCallback(({item, index}:{item: TProduct, index: number}) => <ProductItem {...item} />, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTextStyle}>{'Product List'}</Text>
      <FlatList
        data={products}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ProductList;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTextStyle: {
    marginVertical: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 15,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
  titleText: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    marginBottom: 5,
  },
  productImageStyle:{width: 120, height: 120, borderRadius: 10},
  productCardStyle:{
    backgroundColor: '#fffffF',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    flexDirection: 'row',
  }
});
