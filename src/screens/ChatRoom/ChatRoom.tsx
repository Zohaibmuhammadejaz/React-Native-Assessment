import React, { FC, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/RootStack/RootStack';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { addMessages, useChatState } from '../../store/slices/chatSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatRoom'>;

const ChatRoom: FC<Props> = ({ route }) => {
  let ChatId = route?.params?.id;
  console.log('ChatId', ChatId);

  const dispatch = useAppDispatch();
  const { messages } = useSelector(useChatState);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    dispatch(addMessages(newMessages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
        name: 'Zohaib',
        avatar: 'https://placeimg.com/140/140/people',
      }}
      placeholder="Type a message..."
      alwaysShowSend
      showUserAvatar
    />
  );
};

export default ChatRoom;
