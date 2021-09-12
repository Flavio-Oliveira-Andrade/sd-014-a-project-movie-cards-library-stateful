import React from 'react';
import PropTypes from 'prop-types';
import AddForm from './AddForm';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick();
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddForm name="title" handle={ this.handleChange } value={ title } />
        <AddForm name="subtitle" handle={ this.handleChange } value={ subtitle } />
        <AddForm name="image" handle={ this.handleChange } value={ imagePath } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            onChange={ this.handleChange }
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <AddForm name="rating" handle={ this.handleChange } value={ rating } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option" defaultValue>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: null,
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
