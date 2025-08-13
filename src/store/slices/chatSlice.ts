import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IMessage } from 'react-native-gifted-chat';

interface ChatState {
  messages: IMessage[];
}

const initialState: ChatState = {
  messages: [
    {
      _id: 1,
      text: 'Hello Zohaib! 👋',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'John Doe',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessages(state, action: PayloadAction<IMessage[]>) {
      state.messages = [...action.payload, ...state.messages];
    },
    clearMessages(state) {
      state.messages = [];
    },
  },
});

export const { addMessages, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
export const useChatState = (state: RootState) => state.chat;
