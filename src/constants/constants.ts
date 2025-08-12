interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  img: string;
}

export const chatData: Chat[] = [
  {
    id: '1',
    name: 'John',
    message: 'Hey man, Whats up?',
    time: '8:35 am',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Alina',
    message: 'What about your project?',
    time: '7:00 am',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Jack',
    message: 'How is going on!',
    time: '6:50 am',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Olivia',
    message: 'Hi, How are you?',
    time: '6:35 am',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    name: 'Ava',
    message: 'Can you call me now? Very imp...',
    time: '6:20 am',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '6',
    name: 'Sophia',
    message: 'Finished your work quickly',
    time: '6:00 am',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];
