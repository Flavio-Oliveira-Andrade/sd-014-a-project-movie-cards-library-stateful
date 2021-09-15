import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
// import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';
// import AddMovieBtn from './AddMovieBtn';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, type, checked, value } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle value={ title } onChange={ this.handleChange } />
        <AddMovieSubtitle value={ subtitle } onChange={ this.handleChange } />
        <AddMovieImage value={ imagePath } onChange={ this.handleChange } />
        <AddMovieStoryline value={ storyline } onChange={ this.handleChange } />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            value={ rating }
            // O input deve ter seu valor inicial provido pelo estado inicial do componente, via rating;
            data-testid="rating-input"
            onChange={ this.handleChange }
            // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a rating a avaliação atual continda no input.
          />
        </label>
        <AddMovieGenre value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
          // A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />, que: Executa a callback passada para o componente <AddMovie /> via props, chamada onClick, que recebe como parâmetro o estado atual de <AddMovie />; Reseta o estado de <AddMovie />, voltando para o inicial, conforme mencionado anteriormente.
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
