import React from 'react';
import PropTypes from 'prop-types';
import ImputTitle from './inputTitle';
import ImputSubtitle from './inputSubtitle';

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
    // referencia do bind: https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined?rq=1
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // handleClickBtn() {
  //   this.props.onClick;
  // }

  // Referencia para melhoria de codigo,divisão de componentes em arquivos separados devido a erro do lint:
  // Elielson - https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/120/files

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <ImputTitle value={ title } onChange={ this.handleChange } />
          <ImputSubtitle value={ subtitle } onChange={ this.handleChange } />

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
