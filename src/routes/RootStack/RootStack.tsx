import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../BottomTabs/BottomTabs';
import { ChatRoom } from '../../screens';

export type RootStackParamList = {
  BottomTab: undefined;
  ChatRoom: { id: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function MoveToScreen(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef?.navigate(name as keyof RootStackParamList, params);
  }
}

const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTabs} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
