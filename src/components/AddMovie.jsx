// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onClick() {
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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } />
        <Subtitle value={ subtitle } />
        <ImagePath value={ imagePath } />
        <label htmlFor="handle-change-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea value={ storyline } name="storyline" data-testid="storyline-input" onChange={ this.handleChange } id="handle-change-storyline" />
        </label>
        <label htmlFor="handle-change-rating" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ rating } name="rating" data-testid="rating-input" onChange={ this.handleChange } id="handle-change-rating" />
        </label>
        <label htmlFor="handle-change-genre" data-testid="genre-input-label">
          Gênero
          <select value={ genre } name="genre" data-testid="genre-input" onChange={ this.handleChange } id="handle-change-genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="reset" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
