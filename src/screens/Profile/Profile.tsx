import { View, ScrollView } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import { Space, UserInfo, TouchableIcon } from '../../components';
import { menuItems } from '../../constants/constants';

let profileUrl = 'https://randomuser.me/api/portraits/men/75.jpg';

const Profile: FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.profileContainer}>
        <UserInfo
          name="Ebenezer Omosuli"
          username="@eben10"
          image={profileUrl}
        />
      </View>

      <Space />

      <View style={styles.touchableIconContainer}>
        {menuItems.map((item, index) => (
          <TouchableIcon key={index} title={item.title} icon={item.icon} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
