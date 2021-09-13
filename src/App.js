import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputText: '',
      inputCheckboxFavorites: false,
      selectGenre: '',
      inputSubtitle: '',
      inputTitle: '',
      inputImagePath: '',
      inputStoryline: '',
      inputRating: 0,
      inputGenre: 'action',
    };
  }

  handleChange({ target }) { // desestruturação do event para não precisar escrever event.target
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // necessário para conseguir pegar o valor do checkbox, se for checkbox pega o checked e se não for pega o value
    this.setState({ [name]: value }); // interpolando o valor da variável para ser o nome da chave do objeto
  }

  handleClick() {

  }

  render() {
    const { inputTitle, inputSubtitle, inputImagePath, inputStoryline, inputRating, inputGenre, inputText,
      inputCheckboxFavorites, selectGenre } = this.state;
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
        <AddMovie
          title={ inputTitle }
          subtitle={ inputSubtitle }
          imagePath={ inputImagePath }
          storyline={ inputStoryline }
          rating={ inputRating }
          genre={ inputGenre }
          onClick={ this.handleClick }
          handleChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
