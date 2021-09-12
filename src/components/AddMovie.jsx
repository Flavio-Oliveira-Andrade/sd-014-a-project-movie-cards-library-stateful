import React from 'react';
import PropTypes, { func } from 'prop-types';
import PutInput from './PutInput';



class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    }
  }
  render() {
    const {
      onClick,
      title,
      subtitle,
      rating,
      imagePath,
      storyline,
      genre,
      change } = this.props;
    return (<form data-testid="add-movie-form">
      <fieldset>

        <PutInput data='title' name={'title'} type={'text'} value={title} onChange={change} label={'Título'} />
        <PutInput data='subtitle' name={'subtitle'} type={'text'} value={subtitle} onChange={change} label={'Subtítulo'} />
        <PutInput data='image' name={'imagePath'} type={'text'} value={imagePath} onChange={change} label={'Imagem'} />
        <PutInput data='storyline' name={'storyline'} type={'textarea'} value={storyline} onChange={change} label={'Sinopse'} />
        <PutInput data='rating' name={'avaliation'} type={'number'} value={rating} onChange={change} label={'Avaliação'} />
        <label
          htmlFor="genero"
          data-testid="genre-input-label"
        >
          Gênero
        </label>
        <select
          name="genre"
          id="genero"
          onChange={change}
          value={genre}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button type="submit" data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </fieldset>
    </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  genre: PropTypes.string,
  change: PropTypes.func,
};

// AddMovie.defaultProps = {
//   // onClick: func,
//   title: '',
//   subtitle: '',
//   rating: 0,
//   imagePath: '',
//   storyline: '',
//   genre: '',
//   // change: func,
// };
export default AddMovie;
