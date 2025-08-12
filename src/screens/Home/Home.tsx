import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import { Header, Space } from '../../components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { colors } from '../../utils/color';
import ProductCard from '../../components/ProductCard/ProductCard';

type Category = {
  id: number;
  name: string;
  image: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

let url = 'https://api.escuelajs.co/api/v1/products';

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

const Home: FC = () => {
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.blue} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{error && error.message}</Text>
      </View>
    );
  }

  const renderItem: ListRenderItem<Product> = ({ item, index }) => {
    return (
      <ProductCard
        name={item.category.name}
        description={item.description}
        image={item.images[0]}
        price={item.price}
        title={item.title}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Space />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Home Screen</Text>
      </View>

      <Space />

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
