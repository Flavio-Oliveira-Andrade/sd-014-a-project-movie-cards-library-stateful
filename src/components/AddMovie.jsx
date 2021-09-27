// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';

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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <AddMovieTitle
            title={ title }
            handleChanceTitle={ this.handleChanceTitle }
          />
          <AddMovieSubtitle
            subtitle={ subtitle }
            handleChanceSubtitle={ this.handleChanceSubtitle }
          />
          <AddMovieImage
            imagePath={ imagePath }
            handleChanceImagePath={ this.handleChanceImagePath }
          />
          <AddMovieStoryline
            storyline={ storyline }
            handleChanceStoryline={ this.handleChanceStoryline }
          />
          <AddMovieRating
            rating={ rating }
            handleChanceRating={ this.handleChanceRating }
          />
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
          <button type="button" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
