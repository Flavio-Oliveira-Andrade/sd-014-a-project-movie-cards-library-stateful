// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const ti = 'title-input';
const si = 'subtitle-input';
const ip = 'image-input';
const sli = 'storyline-input';
const ri = 'rating-input';
const gi = 'genre-input';
const bi = 'send-button';
const nt = 'title';
const ns = 'subtitle';
const ni = 'imagePath';
const nsl = 'storyline';
const nr = 'rating';

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
    this.reset = this.reset.bind(this);
  }

  aE(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  reset() {
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
    const { onClick: click } = this.props;
    const { title: t, subtitle: s, imagePath: i } = this.state;
    const { storyline: sl, rating: r, genre: g } = this.state;
    const me = this.aE;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="t" data-testid="title-input-label">
          Título
          <input type="text" id="t" data-testid={ ti } value={ t } onChange={ me } name={ nt } />
        </label>
        <label htmlFor="s" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="s" data-testid={ si } value={ s } onChange={ me } name={ ns } />
        </label>
        <label htmlFor="i" data-testid="image-input-label">
          Imagem
          <input type="text" id="i" data-testid={ ip } value={ i } onChange={ me } name={ ni } />
        </label>
        <label htmlFor="ta" data-testid="storyline-input-label">
          Sinopse
          <textarea name={ nsl } id="ta" value={ sl } data-testid={ sli } onChange={ me } />
        </label>
        <label htmlFor="n" data-testid="rating-input-label">
          Avaliação
          <input type="number" name={ nr } id="n" value={ r } data-testid={ ri } onChange={ me } />
        </label>
        <label htmlFor="se" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="se" data-testid={ gi } value={ g } onChange={ me }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={ () => { click(); this.reset(); } } data-testid={ bi }>
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
