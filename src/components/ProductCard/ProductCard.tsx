import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Space from '../Space/Space';
import { ResponsiveHeight } from '../../utils/Dimesion';
import { colors } from '../../utils/color';
import { moderateScale } from 'react-native-size-matters';

type ProductCardProps = {
  name: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name = 'Electronics',
  title = 'Wireless Headphones',
  image = 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
  price = 199,
  description = 'High-quality wireless headphones with noise cancellation.',
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryName}>{name}</Text>
        <Space value={5} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Space value={5} />

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>

      <Space value={5} />

      <View style={styles.detailContainer}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    elevation: 3,
    padding: 12,
    borderRadius: 10,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: ResponsiveHeight(150),
    borderRadius: 8,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  price: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.blue,
  },
  description: {
    fontSize: moderateScale(14),
    color: colors.offWhite,
  },
});
