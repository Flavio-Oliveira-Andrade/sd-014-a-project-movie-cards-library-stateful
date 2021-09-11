// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    console.log(this.props, 'this.props');
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    this.setState({
      // Pega o estado atual e salva o novo após a mudança, acessa a chave do objeto state, pelo name e altera seu value
      [name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    console.log(this.state, 'this.state');
    console.log(this, 'this');
    return (
      <div>
        <SearchBar
          // Seta: estado inicial e estado ao evento de mudançao
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
