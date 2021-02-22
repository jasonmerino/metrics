import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './metric-tile.component.styles';

type Props = {
  name: string;
  count: number;
  onPress: () => void;
};

export const MetricTile: FC<Props> = ({name, count, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.tile}>
      <Text style={styles.name}>{name}</Text>
      <Text>{count}</Text>
    </Pressable>
  );
};
