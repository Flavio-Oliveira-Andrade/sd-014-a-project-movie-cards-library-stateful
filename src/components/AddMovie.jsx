import React from 'react';
import PropTypes from 'prop-types';
import InputTitles from './InputTitles';
import InputOtherInfos from './InputOtherInfos';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({ ...state, [name]: value }));
  }

  handleClick() {
    const { props: { onClick }, state } = this;
    onClick(state);
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
    const {
      state: { title, subtitle, imagePath, storyline, rating, genre },
    } = this;
    return (
      <form data-testid="add-movie-form">
        <InputTitles
          title={ title }
          subtitle={ subtitle }
          onHandleChange={ this.handleChange }
        />
        <InputOtherInfos
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
          onHandleChange={ this.handleChange }
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            name="genre"
            onChange={ this.handleChange }
            value={ genre }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="send-button"
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
