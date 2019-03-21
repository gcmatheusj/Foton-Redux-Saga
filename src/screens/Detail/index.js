import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Star from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import styles from './styles';

const Detail = ({ navigation }) => {
  const book = navigation.getParam('book');

  return (
    <View style={styles.container}>
      <Header navigation={navigation} handleIsSearching={() => {}} />
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
          </View>
          <View style={styles.bookInfo}>
            <View>
              <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
              <Text style={styles.bookAuthor}>
                <Text>by </Text>
                {book.volumeInfo.authors[0]}
              </Text>
            </View>
            <View style={styles.price}>
              {book.saleInfo.retailPrice ? (
                <Text style={styles.priceText}>
                  <Text>$</Text>
                  {book.saleInfo.retailPrice.amount}
                </Text>
              ) : (
                <Text style={styles.priceText}>Not for sale</Text>
              )}
              <View style={styles.rating}>
                <Star name="star" size={16} color="#2C2605" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#2C2605" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#2C2605" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#2C2605" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#2C2605" style={{ marginRight: 3 }} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <Text style={styles.pageCount}>
            {book.volumeInfo.pageCount}
            <Text> pages</Text>
          </Text>
          <View style={styles.buttonsContainer}>
            {book.saleInfo.retailPrice ? (
              <TouchableOpacity style={styles.buy}>
                <Text style={styles.buyText}>BUY</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={styles.like}>
              <Icon name="heart" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.sinopse}>
        <ScrollView>
          <Text style={styles.sinopseText}>{book.volumeInfo.description}</Text>
        </ScrollView>
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
