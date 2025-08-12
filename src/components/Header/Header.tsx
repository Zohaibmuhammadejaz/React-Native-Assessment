import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { ResponsiveHeight } from '../../utils/Dimesion';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/color';

type HeaderProps = {
  menuIcon?: () => void;
  onSearchClick?: () => void;
};

const Header: FC<HeaderProps> = ({ menuIcon, onSearchClick }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={menuIcon}
        style={styles.iconContainer}
      >
        <Ionicons name="menu-sharp" size={20} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={onSearchClick}
        style={styles.iconContainer}
      >
        <Ionicons name="search" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    height: ResponsiveHeight(30),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    height: ResponsiveHeight(30),
    borderRadius: 30 / 2,
    width: undefined,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray20,
    borderWidth: 1,
  },
});
