import {StyleSheet} from 'react-native';
import {dark, light} from '../theme/colors';
import {space2, space4} from '../theme/space';

export const styles = StyleSheet.create({
  circle: {
    height: space4,
    width: space4,
    borderRadius: space2,
    backgroundColor: dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    color: light,
  },
});
