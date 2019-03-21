import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    handleIsSearching: PropTypes.func.isRequired,
  };

  renderButton = () => {
    const { navigation } = this.props;
    if (navigation.state.routeName === 'List') {
      return (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="menu" size={32} color="#2C2605" />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name="arrow-back" size={32} color="#2C2605" />
      </TouchableOpacity>
    );
  };

  render() {
    const { handleIsSearching } = this.props;

    return (
      <View style={styles.container}>
        {this.renderButton()}
        <Text style={styles.title}>Design Books</Text>
        <TouchableOpacity onPress={() => handleIsSearching()}>
          <Icon name="search" size={32} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}
