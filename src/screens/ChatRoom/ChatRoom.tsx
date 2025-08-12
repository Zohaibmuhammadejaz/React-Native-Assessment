import React, { FC, useCallback, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/RootStack/RootStack';
import { Text, View } from 'react-native';
// import { GiftedChat, IMessage } from 'react-native-gifted-chat';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatRoom'>;

const ChatRoom: FC<Props> = ({ route }) => {
  // let ChatId = route?.params?.id;
  // console.log('ChatId', ChatId);

  // const [messages, setMessages] = useState<IMessage[]>([]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);

  // const onSend = useCallback((messages: IMessage[] = []) => {
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, messages),
  //   );
  // }, []);

  return (
    <View>
      <Text>Gifted Chart</Text>
    </View>
  );
};

export default ChatRoom;
