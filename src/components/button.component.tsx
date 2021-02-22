import React, {FC} from 'react';
import {Pressable, Text, ViewStyle} from 'react-native';
import {styles} from './button.styles';

type Props = {
  shape?: 'circle';
  onPress: () => void;
};

export const Button: FC<Props> = ({onPress, shape}) => {
  let style: ViewStyle = {};
  if (shape === 'circle') {
    style = styles.circle;
  }

  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};
