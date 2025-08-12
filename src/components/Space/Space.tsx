import { View } from 'react-native';
import React, { FC } from 'react';

interface ISpaceProps {
  orientation?: 'vertical' | 'horizontal';
  value?: number;
}

const Space: FC<ISpaceProps> = ({ orientation = 'vertical', value = 10 }) => {
  if (orientation === 'horizontal') {
    return <View style={{ width: value }} />;
  }
  return <View style={{ height: value }} />;
};

export default Space;
