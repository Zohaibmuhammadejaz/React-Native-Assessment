import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Chat, Home, Profile } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/color';
import { moderateScale } from 'react-native-size-matters';

export type BottomTabParamList = {
  Chat: undefined;
  Profile: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const homeIcon = 'home-outline';
const chatIcon = 'chatbubble-outline';
const profileIcon = 'person-outline';
const ICON_SIZE = moderateScale(15);

const getTabIcon = (routeName: string, color: string) => {
  switch (routeName) {
    case 'Home':
      return <Ionicons name={homeIcon} size={ICON_SIZE} color={color} />;
    case 'Chat':
      return <Ionicons name={chatIcon} size={ICON_SIZE} color={color} />;
    case 'Profile':
      return <Ionicons name={profileIcon} size={ICON_SIZE} color={color} />;
    default:
      return null;
  }
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => getTabIcon(route.name, color),
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
