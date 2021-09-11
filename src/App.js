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
      inputText: '',
      inputCheckboxFavorites: false,
      selectGenre: '',
    };
  }

  handleChange({ target }) { // desestruturação do event para não precisar escrever event.target
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // necessário para conseguir pegar o valor do checkbox, se for checkbox pega o checked e se não for pega o value
    this.setState({ [name]: value }); // interpolando o valor da variável para ser o nome da chave do objeto
  }

  render() {
    const { inputText, inputCheckboxFavorites, selectGenre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ inputText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ inputCheckboxFavorites }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectGenre }
          onSelectedGenreChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
