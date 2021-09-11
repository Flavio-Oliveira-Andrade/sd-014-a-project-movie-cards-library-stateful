import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',

    }
  }

  render() {
    const { movies } = this.props;
    return (
      <form 
      data-testid="search-bar-form">
      formulário
      </form>
    );
  }
}

export default SearchBar;


