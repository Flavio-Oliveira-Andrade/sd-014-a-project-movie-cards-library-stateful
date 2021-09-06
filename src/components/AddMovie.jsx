import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Title from './Title';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovieAndReset = this.addMovieAndReset.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.type === 'number') {
      this.setState({ [name]: parseFloat(value) });
    } else { this.setState({ [name]: value }); }
  }

  addMovieAndReset(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ this.handleChange } value={ title } />
        <Subtitle handleChange={ this.handleChange } value={ subtitle } />
        <ImagePath handleChange={ this.handleChange } value={ imagePath } />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            name="storyline"
            value={ storyline }
            type="textarena"
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            value={ rating }
            type="number"
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.addMovieAndReset }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
