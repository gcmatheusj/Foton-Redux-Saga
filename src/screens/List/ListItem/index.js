import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '~/services/navigation';

import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ListItem = ({ book }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigate('Detail', { book })}>
    <Image style={styles.avatar} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
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
