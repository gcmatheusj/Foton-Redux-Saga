import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Header extends Component {
  renderButton = () => {
    if (this.props.navigation.state.routeName === 'List') {
      return (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="menu" size={36} color="#2C2605" />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={() => {}}>
        <Icon name="arrow-back" size={36} color="#2C2605" />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderButton()}
        <Text style={styles.title}>Design Books</Text>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="search" size={36} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}
