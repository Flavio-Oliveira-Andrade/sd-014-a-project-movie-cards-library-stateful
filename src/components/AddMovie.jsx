import React from 'react';
import PropTypes from 'prop-types';
import ImputTitle from './inputTitle';

class AddMovie extends React.Component {
  // https://pt-br.reactjs.org/docs/react-component.html#constructor
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
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeStoryline = this.handleChangeStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    // referencia do bind: https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined?rq=1
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleChangeStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  handleChangeRating(event) {
    this.setState({ rating: event.target.value });
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  handleClickBtn() {
    this.props.onClick;
  }

  // Referencia para melhoria de codigo,divisão de componentes em arquivos separados devido a erro do lint:
  // Elielson - https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/120/files

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <ImputTitle value={ title } onChange={ this.handleChange } />
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChangeSubtitle }
            />
          </label>

          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChangeImage }
            />
          </label>

          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChangeStoryline }
              cols="30"
              rows="10"
            />
          </label>

          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChangeRating }
            />
          </label>

          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChangeGenre }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            onClick={ onclick }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
