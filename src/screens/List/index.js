import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator, FlatList, View, StatusBar, TextInput,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '~/store/ducks/books';

import Header from '~/components/Header';
import ListItem from './ListItem';

import styles from './styles';

class List extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    loadBooksRequest: PropTypes.func.isRequired,
    paginateBooksRequest: PropTypes.func.isRequired,
    searchBooksRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
    books: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
  };

  state = {
    refreshing: false,
    startIndex: 20,
    search: '',
    isSearching: false,
  };

  componentDidMount() {
    const { loadBooksRequest } = this.props;

    loadBooksRequest();
  }

  loadBooks = () => {
    this.setState({ refreshing: true });
    const { loadBooksRequest } = this.props;

    loadBooksRequest();
    this.setState({ refreshing: false });
  };

  paginateBooks = () => {
    const { startIndex } = this.state;
    const { paginateBooksRequest } = this.props;

    paginateBooksRequest(startIndex);

    this.setState({ startIndex: startIndex + 21 });
  }

  handleIsSearching = () => {
    this.setState({ isSearching: true });
  }

  handleSearch = () => {
    const { search } = this.state;
    const { searchBooksRequest } = this.props;

    searchBooksRequest(search);

    this.setState({ isSearching: false });
  }

  renderItem = ({ item }) => <ListItem book={item} />;

  renderFooter = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="small" color="#2C2605" />
    </View>
  );

  renderList = () => {
    const { refreshing } = this.state;
    const { books } = this.props;

    return (
      <FlatList
        data={books.data}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={this.loadBooks}
        refreshing={refreshing}
        onEndReached={this.paginateBooks}
        onEndReachedThreshold={0.1}
        ListFooterComponent={books.loadingPaginate ? this.renderFooter() : null}
      />
    );
  };

  render() {
    const { search, isSearching } = this.state;
    const { books, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFDD0D" barStyle="dark-content" />
        {isSearching ? (
          <TextInput
            style={styles.search}
            value={search}
            onChangeText={text => this.setState({ search: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            returnKeyType="send"
            onSubmitEditing={this.handleSearch}
          />
        ) : <Header navigation={navigation} handleIsSearching={this.handleIsSearching} />}
        {books.loading ? (
          <View style={styles.activity}>
            <ActivityIndicator size="large" color="#2C2605" />
          </View>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
