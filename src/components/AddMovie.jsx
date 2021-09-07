// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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

    this.aE = this.aE.bind(this);
  }

  aE(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    //  const { onClick } = this.props;
    const { title: t, subtitle: s, imagePath: i, storyline: sl, rating: r, genre: g } = this.state;
    const ti = 'title-input';
    const si = 'subtitle-input';
    const ip = 'image-input';
    const sli = 'storyline-input';
    const ri = 'rating-input';
    const gi = 'genre-input';

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="t" data-testid="title-input-label">
          Título
          <input type="text" id="t" data-testid={ ti } value={ t } onChange={ this.aE } name="title" />
        </label>
        <label htmlFor="s" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="s" data-testid={ si } value={ s } onChange={ this.aE } name="subtitle" />
        </label>
        <label htmlFor="i" data-testid="image-input-label">
          Imagem
          <input type="text" id="i" data-testid={ ip } value={ i } onChange={ this.aE } name="imagePath" />
        </label>
        <label htmlFor="ta" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" id="ta" cols="30" rows="10" value={ sl } data-testid={ sli } onChange={ this.aE } />
        </label>
        <label htmlFor="n" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" id="n" value={ r } data-testid={ ri } onChange={ this.aE } />
        </label>
        <label htmlFor="se" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="se" data-testid={ gi } value={ g } onChange={ this.aE }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

/*  AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};  */

export default AddMovie;
