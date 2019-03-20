import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.baseMargin * 3,
    maxWidth: (metrics.screenWidth - 72) / 3,
    backgroundColor: '#FFDD0D',
    elevation: 12,
  },

  avatar: {
    width: '100%',
    height: 150,
  },
});

export default styles;
