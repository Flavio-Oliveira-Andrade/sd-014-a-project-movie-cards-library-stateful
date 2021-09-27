// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    this.saveState = this.saveState.bind(this);
    this.handleChanceTitle = this.handleChanceTitle.bind(this);
    this.handleChanceSubtitle = this.handleChanceSubtitle.bind(this);
    this.handleChanceImagePath = this.handleChanceImagePath.bind(this);
    this.handleChanceStoryline = this.handleChanceStoryline.bind(this);
    this.handleChanceRating = this.handleChanceRating.bind(this);
    this.handleChanceGenre = this.handleChanceGenre.bind(this);
  }

  handleChanceTitle(event) {
    this.saveState({ key: 'title', value: (event.target.value) });
  }

  handleChanceSubtitle(event) {
    this.saveState({ key: 'subtitle', value: (event.target.value) });
  }

  handleChanceImagePath(event) {
    this.saveState({ key: 'imagePath', value: (event.target.value) });
  }

  handleChanceStoryline(event) {
    this.saveState({ key: 'storyline', value: (event.target.value) });
  }

  handleChanceRating(event) {
    this.saveState({ key: 'rating', value: (event.target.value) });
  }

  handleChanceGenre(event) {
    this.saveState({ key: 'genre', value: (event.target.value) });
  }

  saveState(content) {
    const { key, value } = content;
    this.setState({
      [`${key}`]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title-input"
              id="title-input"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChanceTitle }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle-input"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChanceSubtitle }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="image-input"
              id="image-input"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChanceImagePath }
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline-input"
              id="storyline-input"
              data-testid="storyline-input"
              cols="30"
              rows="10"
              value={ storyline }
              onChange={ this.handleChanceStoryline }
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating-input"
              id="rating-input"
              data-testid="rating-input"
              value={ rating }
              onChange={ this.handleChanceRating }
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              name="genre-input"
              id="genre-input"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChanceGenre }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
