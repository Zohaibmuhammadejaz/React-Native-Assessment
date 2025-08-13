import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/color';
import { ResponsiveHeight, ResponsiveWidth } from '../../utils/Dimesion';
import Space from '../Space/Space';
import { moderateScale } from 'react-native-size-matters';

interface UserInfoProps {
  name: string;
  username: string;
  image: string;
  onPress?: () => void;
}

const UserInfo: FC<UserInfoProps> = ({ name, username, image, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>

      <Space />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>

      <Space />

      <TouchableOpacity onPress={onPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  imgContainer: {
    height: ResponsiveHeight(80),
    width: undefined,
    borderRadius: 80 / 2,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: colors.gray,
  },
  editButton: {
    backgroundColor: colors.gray20,
    width: ResponsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default UserInfo;
