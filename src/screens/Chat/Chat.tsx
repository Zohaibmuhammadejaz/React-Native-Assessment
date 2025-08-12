import { Alert, FlatList, ListRenderItem, Text, View } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import { chatData } from '../../constants/constants';
import ChatList, { ChatListProps } from '../../components/ChatList/ChatList';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  toggleFavorite,
  useFavoriteState,
} from '../../store/slices/favoriteSlice';
import { Header, Space } from '../../components';
import { MoveToScreen } from '../../routes/RootStack/RootStack';

const Chat: FC = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(useFavoriteState);

  const handleToggle = (id: string) => {
    if (id) {
      const isAlreadyFavorite = favorites.includes(id);
      dispatch(toggleFavorite(id));
      if (isAlreadyFavorite) {
        Alert.alert('Attention', 'Removed from Favorites');
      } else {
        Alert.alert('Attention', 'Added to Favorites');
      }
    }
  };

  const onHandleChatClick = (id: string) => {
    MoveToScreen('ChatRoom', { id });
    console.log('coming from button', id);
  };

  const renderItem: ListRenderItem<ChatListProps> = ({ index, item }) => {
    return (
      <ChatList
        id={item.id}
        key={index}
        message={item.message}
        name={item.name}
        time={item.time}
        img={item.img}
        iconOnClick={() => handleToggle(item.id)}
        onPress={() => onHandleChatClick(item.id)}
      />
    );
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <Space />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Chat Screen</Text>
      </View>

      <Space />

      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Chat;
