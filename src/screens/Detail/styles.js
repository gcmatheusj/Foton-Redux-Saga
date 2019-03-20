import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDD0D',
  },

  containerDetail: {
    flex: 1,
    flexGrow: 1,
  },

  detail: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 3,
    maxWidth: metrics.screenWidth,
    marginHorizontal: 18,
  },

  avatarContainer: {
    backgroundColor: '#FFDD0D',
    elevation: 32,
  },

  avatar: {
    width: 110,
    height: 155,
  },

  bookInfo: {
    marginLeft: 20,
    width: 0,
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  bookTitle: {
    color: '#2C2605',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
  },

  bookAuthor: {
    fontSize: 18,
  },

  price: {
    flexDirection: 'row',
  },

  priceText: {
    color: '#2C2605',
    fontSize: 20,
    fontWeight: 'bold',
  },

  rating: {
    marginLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  actions: {
    marginTop: 24,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pageCount: {
    fontSize: 16,
    marginLeft: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buy: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42a5f5',
    height: 40,
    width: 130,
    borderRadius: 50,
    marginRight: 10,
    elevation: 12,
  },

  buyText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  like: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef5350',
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  sinopse: {
    flex: 1,
    padding: 18,
    paddingTop: 20,
    backgroundColor: '#FFF',
  },

  sinopseText: {
    lineHeight: 35,
    fontSize: 16,
  },
});

export default styles;
