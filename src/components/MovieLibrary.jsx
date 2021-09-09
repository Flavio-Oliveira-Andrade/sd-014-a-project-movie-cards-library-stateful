// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

// abaixo temos a classe criada, dentro um construtor e as propriedades com seus valores iniciais.
// requisito 16
class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      brookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    // abaixo faço bind pra cada funcao criada para que possa usar o this desta funcao
    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  // a funçao abaixo serve pra verificar se o eveto confirma o checked de checkbox, por isso o comparativo;
  // e atualiza o state inicial para name value, tornando dinamica pelo acesso name;
  // requisito 17

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({ [name]: value });
  }

  // a funcao esta associada ao searchText usado no return de render, dentro de SearchBar abaixo tenho o movies que sera minha lista de filmes, como props
  // e um if para verificar se o valor do evento for nada ou string vazia se ha um texto ou nao, se nao tiver texto mantenha o estado inicial de movies
  // se nao fazer um filtro pelas pelo titilo, subtitulo, e snopse e verifica se contém no valor do evento e retorna esses dados.
  onSearchTextChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const dados = `${title}, ${subtitle}, ${storyline}`;
          return dados.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  // a funcao abaixo esta associada ao bookmarkedOnly, que retorna um booleano,se seu retorno for verdadeiro deve ser renderizado pro MovieList
  // se for false nao altera a lista de filmes a ser renderizada. usei movies como props
  // e faz a checagem se dentro de movies o state de bookmarkedOnly existir ou seja verdadeira vai ser renderizado
  // caso contrario retorna o estate de movies.
  // em seguida chama a funcao handleChange
  onBookmarkedChange(event) {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked) });
    } else {
      this.setState({ movies });
    }
    this.handleChange(event);
  }
  // a funcao primeiro acessa movies como props e verifica se o valor do event.target for string vazia ou seja sem valor,
  // retorna o state atualiza o setstate para movies
  // caso contrario faz um filter e verifica o movie na propriedade genre é igual ao valor do evento e sendo atualiza o setstate pra esse valor;

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === event.target.value),
      });
    }
    this.handleChange(event);
  }
  // a funcao abaixo acessa movies como props depois armazena em uma const e acessa seu rating
  // e armazena seu movie.rating com parseFloat caso seja uma string transforma em numero.
  // por ultimo atualiza o setState com movies sendo tudo que vem no array movies mais a funcao criada;

  addNewMovie(movie) {
    const { movies } = this.state;
    const movieNew = movie;
    movieNew.rating = parseFloat(movie.rating);
    this.setState({ movies: [...movies, movieNew] });
  }
  // abaixo no render estou fazendo uso do this props para acessar todas as propriedades passadas em state
  // e dentro de SearchBar e AddMovie e MovieList fazendo as reinderizações de todas as funcoes criadas junto as propriedades de state conforme requisito.

  render() {
    const { searchText, brookmarkedOnly, selectedGenre, movies } = this.props;
    return (
      <section>
        {/* requisito 17 e 18 */}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          brookmarkedOnly={ brookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        {/* // requisito 19 */}
        <AddMovie onClick={ this.addNewMovie } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

// requisito 20
MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  brookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
