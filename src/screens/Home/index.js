import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text, TextInput, TouchableOpacity, View, StatusBar, AsyncStorage,
} from 'react-native';

import styles from './styles';

export default class Login extends Component {
  state = {
    username: '',
  };

  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    await AsyncStorage.setItem('@Designbook:username', username);

    navigation.navigate('List');
  };

  render() {
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFDD0D" barStyle="dark-content" />
        <Text style={styles.title}>Welcome to Design Books</Text>
        <Text style={styles.subtitle}>To continue we need you to enter your username.</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
