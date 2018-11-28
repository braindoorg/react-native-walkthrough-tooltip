// @flow
import { StyleSheet } from 'react-native';

const styles: StyleSheet.Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
    backgroundColor: 'transparent',
  },
  containerVisible: {
    opacity: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  tooltip: {
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  content: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#00657B',
  },
  arrow: {
    position: 'absolute',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});

export default styles;
