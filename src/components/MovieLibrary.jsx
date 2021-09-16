// Importação dos Componentes.
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

// Criando o componente MovieLibrary e renderizando.
class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

// Verificando os tipos das propriedades que eu espero que esse componente esteja recebendo, uma propriedade que se chama movies ela PropTypes do tipo array de objeto que eu espero receber para validação.
// Referência: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper

// isRequired: É obrigatorio que ele venha com alguma propriedade no MovieLibrary.
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// exportando o componente MovieLibrary.
export default MovieLibrary;
