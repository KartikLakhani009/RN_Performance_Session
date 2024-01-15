import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './ProductList'


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

  export default React.memo(ProductItem)