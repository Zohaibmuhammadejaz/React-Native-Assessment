import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { FC } from 'react';
import Space from '../Space/Space';
import { colors } from '../../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../store/store';
import { useFavoriteState } from '../../store/slices/favoriteSlice';
import { ResponsiveHeight } from '../../utils/Dimesion';
import { moderateScale } from 'react-native-size-matters';

export type ChatListProps = {
  id: string;
  name: string;
  message: string;
  time: string;
  img: string;
  onPress?: () => void;
  iconOnClick?: () => void;
};

const ChatList: FC<ChatListProps> = ({
  message = 'Hi',
  name = 'John Doe',
  time = '10:16 pm',
  img,
  onPress,
  iconOnClick,
  id,
}) => {
  const { favorites } = useAppSelector(useFavoriteState);

  let isLiked = favorites.includes(id);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.imgContainer}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>

      <Space orientation="horizontal" value={5} />

      <View style={styles.chatInfoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Space value={2} />
        <Text style={styles.messageText} numberOfLines={1}>
          {message}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={iconOnClick} style={styles.iconContainer}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={20}
            color={isLiked ? colors.red : colors.black}
          />
        </TouchableOpacity>

        <Space value={5} />

        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: undefined,
    height: ResponsiveHeight(48),
    borderRadius: 24,
    aspectRatio: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  chatInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.gray,
  },
  messageText: {
    fontSize: moderateScale(12),
    color: colors.gray,
  },
  time: {
    fontSize: moderateScale(12),
    color: colors.gray,
  },
  rightContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
