import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {products} from './productData';

type TProductItemProps = {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  thumbnail: string;
};

const ProductItem = ({
  id,
  title,
  brand,
  description,
  price,
  thumbnail,
}: TProductItemProps) => {
  return (
    <View
      key={id}
      style={styles.productCardStyle}>
      <View style={{flex: 0.4, justifyContent: 'center'}}>
        <Image
          source={{uri: thumbnail}}
          style={styles.productImageStyle}
        />
      </View>
      <View style={{flex: 0.6, justifyContent: 'center',}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subText}>{brand}</Text>
        <Text style={styles.subText}>{description}</Text>
        <Text style={[styles.titleText,{fontSize:16}]}>{'$ ' +price }</Text>
      </View>
    </View>
  );
};

interface IProductListProps {}

const ProductList = (props: IProductListProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTextStyle}>{'Product List'}</Text>
      <FlatList
        data={products}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => <ProductItem {...item} />}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
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
