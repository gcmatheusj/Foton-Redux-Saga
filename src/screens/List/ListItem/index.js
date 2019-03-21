import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '~/services/navigation';

import {
  TouchableOpacity, Image, Text, View,
} from 'react-native';

import styles from './styles';

const ListItem = ({ book }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigate('Detail', { book })}>
    {book.volumeInfo.imageLinks ? (
      <Image style={styles.avatar} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
    ) : (
      <View style={styles.titleContainer}>
        <Text>{book.volumeInfo.title}</Text>
      </View>
    )}
  </TouchableOpacity>
);

ListItem.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.object,
    imageLinks: PropTypes.object,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ListItem;
