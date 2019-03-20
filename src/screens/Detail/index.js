import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '~/components/Header';

import styles from './styles';

const Detail = ({ navigation }) => {
  const book = navigation.getParam('book');

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
          </View>
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
            <Text style={styles.bookAuthor}>
              <Text>by </Text>
              {book.volumeInfo.authors[0]}
            </Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Text style={styles.pageCount}>
            {book.volumeInfo.pageCount}
            <Text> pages</Text>
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buy}>
              <Text style={styles.buyText}>BUY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.like}>
              <Icon name="heart" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.sinopse}>
        <Text style={styles.sinopseText}>{book.volumeInfo.description}</Text>
      </View>
    </View>
  );
};

Detail.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

Detail.navigationOptions = {
  header: null,
};

export default Detail;
