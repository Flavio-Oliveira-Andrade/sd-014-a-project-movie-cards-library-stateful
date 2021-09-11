import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      inputText: "",
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }); // interpolando o valor da variável para ser o nome da chave do objeto
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.inputText}
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
      </div>
    );
  }
}

export default App;
