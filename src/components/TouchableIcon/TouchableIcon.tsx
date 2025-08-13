import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../utils/color';
import Space from '../Space/Space';

interface TouchableIconProps {
  title: string;
  icon:
    | 'profile'
    | 'setting'
    | 'verification'
    | 'lock'
    | 'gift'
    | 'more'
    | string;
  checked?: boolean;
}

const TouchableIcon: FC<TouchableIconProps> = ({ icon, title, checked }) => {
  let IconElement = null;
  let IconSize = moderateScale(20);
  let IconColor = colors.gray;

  switch (icon) {
    case 'profile':
      IconElement = <Feather name="user" size={IconSize} color={IconColor} />;
      break;
    case 'setting':
      IconElement = (
        <Feather name="settings" size={IconSize} color={IconColor} />
      );
      break;

    case 'verification':
      IconElement = (
        <Feather name="check-circle" size={IconSize} color={IconColor} />
      );
      break;
    case 'lock':
      IconElement = <Feather name="lock" size={IconSize} color={IconColor} />;
      break;
    case 'gift':
      IconElement = <Feather name="gift" size={IconSize} color={IconColor} />;
      break;
  }

  return (
    <TouchableOpacity style={styles.container}>
      {IconElement && <View style={styles.iconContainer}>{IconElement}</View>}

      <Space orientation="horizontal" value={10} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Feather name="chevron-right" size={20} color={colors.gray} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableIcon;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(15),
    color: colors.black,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
