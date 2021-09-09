import React from 'react';
import PropTypes from 'prop-types';
import Avaliação from './Avaliacao';
import Sinopse from './Sinopse';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  creatInput = (title, type, dataTest, value) => (
    <input
      name={ title }
      data-testid={ dataTest }
      type={ type }
      value={ value }
      onChange={ this.updateState }
    />
  )

  submitBtn() {
    const { onClick } = this.props;
    onClick();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: 'action',
      rating: 0,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.creatInput('title', 'text', 'title-input', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.creatInput('subtitle', 'text', 'subtitle-input', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.creatInput('imagePath', 'text', 'image-input', imagePath)}
        </label>
        <Sinopse storyline={ storyline } update={ this.updateState } />
        <Avaliação rating={ rating } update={ this.updateState } />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={ genre }
            name="genre"
            onChange={ this.updateState }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.submitBtn() }
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
