import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    maxWidth: (screenWidth - 72) / 3,
    backgroundColor: '#FFDD0D',
    elevation: 12,
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  avatar: {
    width: '100%',
    height: 150,
  },
});

export default styles;
