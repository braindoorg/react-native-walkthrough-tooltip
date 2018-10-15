import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
    backgroundColor: 'transparent',
  },
  containerVisible: {
    opacity: 1,
  },
  tooltip: {
    backgroundColor: 'transparent',
    position: 'absolute',
    borderRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowColor: '#000'
  },
  content: {
    borderRadius: 4,
  },
  arrow: {
    position: 'absolute',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
}));
