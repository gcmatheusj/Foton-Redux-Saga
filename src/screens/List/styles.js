import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDD0D',
  },

  columnWrapper: {
    marginHorizontal: 18,
    justifyContent: 'space-between',
  },

  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default styles;
